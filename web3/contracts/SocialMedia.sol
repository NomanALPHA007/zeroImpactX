// // SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract SocialMediaDapp {

    address public admin;

    address[] internal addresses;
    mapping(string => address) internal names;
    mapping(address => Profile) public profiles;
    mapping(address => mapping(address => Profile)) internal followers;
    mapping(address => mapping(address => Profile)) internal following;
    mapping(address => Post[]) internal posts;

    //CREATE GROUPS
    struct Group {
        address[] members;
        mapping(uint256 => string) messages;
        string name;
        string description;
        uint256 groupID;
    }

    mapping(uint256 => Group) public groups;
    uint256 public totalGroups;

    event GroupCreated(uint256 groupId, address admin, string name, string description);
    event UserJoinedGroup(uint256 groupId, address user);
    event MessageAdded(uint256 groupId, address sender, string message);
    //GROUP END

    //GREATING DI
    uint256 public _postID;
    uint256 public _userID;

    //CHAT
    mapping(bytes32 => message[]) allMessages;

    struct message{
        address sender;
        uint256 timestamp;
        string msg;
    }

    // Profile
    struct Profile {
        address owner;
        string name;
        uint timeCreated;
        uint id;
        uint postCount;
        uint followerCount;
        uint followingCount;
        address[] followers;
        address[] following;
    }

    struct AllUserStruck{
        address owner;
        string name;
        uint timeCreated;
        uint id;
        uint postCount;
        uint followerCount;
        uint followingCount;
    }

    AllUserStruck[] getAllUsers;

    // Post
    struct Post {
        address author;
        string postType;
        string postDescription;
        string postURL;
        uint timeCreated;
        uint postID;
        uint likes;
        string[] comments;
    }

    // Check if message sender has a created profile
    modifier senderHasProfile() {
        require(profiles[msg.sender].owner != address(0x0), "ERROR: <Must create a profile to perform this action>");
        _;
    }

    // Check if a specified address has created a profile
    modifier profileExists(address _address) {
        require(profiles[_address].owner != address(0x0), "ERROR: <Profile does not exist>");
        _;
    }

    // Check that the message sender is not specifying an address that is itself
    modifier notSelf(address _address) {
        require(msg.sender != _address, "ERROR <You cannot follow/unfollow yourself");
        _;
    }

    // Check that the input is not empty
    modifier nonEmptyInput(string calldata _input) {
        require(keccak256(abi.encodePacked(_input)) != keccak256(abi.encodePacked("")), "ERROR: <Input cannot be empty>");
        _;
    }

   //GROUP MODIFIER
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this function");
        _;
    }

    modifier onlyGroupMember(uint256 groupId) {
        require(isGroupMember(groupId, msg.sender), "Only group members can call this function");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    // Create a new profile from a given username
    function createProfile(string calldata _name) external nonEmptyInput(_name) {
        // Checks that the current account did not already make a profile and did not choose a taken username
        require(profiles[msg.sender].owner == address(0x0), "ERROR: <You have already created a profile>");
        require(names[_name] == address(0x0), "ERROR: <Username taken>");

          _userID++;
         uint256 userID = _userID;

        // Updates username list
        names[_name] = msg.sender;

        // Create the new profile object and add it to "profiles" mapping
        profiles[msg.sender] = Profile({
            owner: msg.sender,
            name: _name,
            timeCreated: block.timestamp,
            id: userID,
            postCount: 0,
            followerCount: 0,
            followingCount: 0,
            followers: new address[](0x0),
            following: new address[](0x0)
        });

        // Add address to list of global addresses
        addresses.push(msg.sender);

        getAllUsers.push(AllUserStruck(msg.sender, _name, block.timestamp, userID, 0,0,0));
    }

    // Follow a new profile
    function follow(address _address) external senderHasProfile profileExists(_address) notSelf(_address) {
        require(following[msg.sender][_address].owner == address(0x0), "ERROR: <You already follow this profile>");

        // Add entry to "followers" and "following" mappings
        followers[_address][msg.sender] = profiles[msg.sender];
        following[msg.sender][_address] = profiles[_address];

        // Add element to "followers" and "following" arrays in both Profile objects
        profiles[_address].followers.push(msg.sender);
        profiles[msg.sender].following.push(_address);

        // Increment "followerCount" and "followingCount" in both Profile objects
        profiles[_address].followerCount++;
        profiles[msg.sender].followingCount++;


    }

    // Unfollow a profile
    // This deletion operation has a time complexity of O(N), is there a better way to do this?
    function unfollow(address _address) external senderHasProfile profileExists(_address) notSelf(_address) {
        require(following[msg.sender][_address].owner != address(0x0), "ERROR: <You already do not follow this profile>");

        // Delete entry from "followers" and "following" mappings
        delete followers[_address][msg.sender];
        delete following[msg.sender][_address];

        // Delete element from "followers" array in Profile object and decrement followerCount
        for (uint i=0; i<profiles[_address].followerCount; i++) {
            if (profiles[_address].followers[i] == msg.sender) {
                delete profiles[_address].followers[i];
                profiles[_address].followerCount--;
                break;
            }
        }

        // Delete element from "following" array in Profile object and decrement followingCount
        for (uint i=0; i<profiles[msg.sender].followingCount; i++) {
            if (profiles[msg.sender].following[i] == _address) {
                delete profiles[msg.sender].following[i];
                profiles[msg.sender].followingCount--;
                break;
            }
        }
    }


    // Create a post
    function createPost(string calldata _type, string calldata _description, string calldata _postURL ) external senderHasProfile() nonEmptyInput(_type) {
        
         _postID++;
         uint256 postID = _postID;
        
        // Create the Post object
        Post memory newPost = Post({
            author: msg.sender,
            postType: _type,
            postDescription: _description,
            postURL: _postURL,
            timeCreated: block.timestamp,
            postID: postID,
            likes: 0,
            comments: new string[](0)
        });

        // Add entry to "posts" mappings
        posts[newPost.author].push(newPost);

        // Increment "postCount" in Profile object
        profiles[newPost.author].postCount++;
    }

    // Returns all posts from a given address
    function getPosts(address _address) external view profileExists(_address) returns(Post[] memory) {
        return posts[_address];
    }

    // Returns total user count
    function getUserCount() external view returns(uint) {
        return addresses.length;
    }

    // Returns all registered addresses
    function getAddresses() external view returns(address[] memory) {
        return addresses;
    }

    // Get all followers of a specific address
    function getFollowers(address _address) external view profileExists(_address) returns(address[] memory) {
        return profiles[_address].followers;
    }

    // Get all followed accounts of a specific address
    function getFollowing(address _address) external view returns(address[] memory) {
        return profiles[_address].following;
    }

    function getAllPosts() public view returns (Post[] memory) {
        uint256 itemCount = 0;
        for (uint256 i = 0; i< addresses.length; i++) {
                itemCount += posts[addresses[i]].length;
            }

        Post[] memory items = new Post[](itemCount);
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < addresses.length; i++) {
                for(uint j=0; j < posts[addresses[i]].length; j++) {
                    items[currentIndex] = posts[addresses[i]][j];
                    currentIndex += 1;
                }
            }
        return items;
    }

     // Delete a post
    function deletePost(uint id) external senderHasProfile() {
        require(posts[msg.sender][id].author != address(0x0), "Post does not exist");

        delete posts[msg.sender][id];
        profiles[msg.sender].postCount--;
    }

    // like post
    function likePost(uint256 _postID ) external senderHasProfile() {
        for (uint i = 0; i < addresses.length; i++) {
            for(uint j=0; j < posts[addresses[i]].length; j++) {
                if (posts[addresses[i]][j].postID == _postID) {
                    posts[addresses[i]][j].likes++;
                    break;
                }
            }
        }
    }

    function unlikePost(uint256 _postID ) external senderHasProfile() {
        for (uint i = 0; i < addresses.length; i++) {
            for(uint j=0; j < posts[addresses[i]].length; j++) {
                if (posts[addresses[i]][j].postID == _postID) {
                    posts[addresses[i]][j].likes--;
                    break;
                }
            }
        }
    }

    // Create a comment
    function addComment(string calldata _comment, uint256 _postID) external {
        for (uint i = 0; i < addresses.length; i++) {
            for(uint j=0; j < posts[addresses[i]].length; j++) {
                if (posts[addresses[i]][j].postID == _postID) {
                    posts[addresses[i]][j].comments.push(_comment);
                    break;
                }
            }
        }
    }

    //SEND MESSAGE
    function sendMessage(address friend_key, string calldata _msg) external{
        bytes32 chatCode = _getChatCode(msg.sender, friend_key);
        message memory newMsg = message(msg.sender, block.timestamp, _msg);
        allMessages[chatCode].push(newMsg);
    }

    //get chat code
    function _getChatCode(address pubkey1, address pubkey2) internal pure returns(bytes32){
        if(pubkey1 < pubkey2){
            return keccak256(abi.encodePacked(pubkey1, pubkey2));
        } else 
        return keccak256(abi.encodePacked(pubkey2, pubkey1));
    }

    //READ MESSAGE
    function readMessage(address friend_key) external view returns(message[] memory){
        bytes32 chatCode = _getChatCode(msg.sender, friend_key);
        return allMessages[chatCode];
    }

    function getAllAppUser() public view returns(AllUserStruck[] memory){
        return getAllUsers;
    }

    ///EDIT POST
    function editPost(uint256 _postID, string calldata _description ) external senderHasProfile() {
        for (uint i = 0; i < addresses.length; i++) {
            for(uint j=0; j < posts[addresses[i]].length; j++) {
                if (posts[addresses[i]][j].postID == _postID) {
                    posts[addresses[i]][j].postDescription = _description;
                    break;
                }
            }
        }
    }

    // GET SINGLE POST
    function getSinglePost(uint256 _postID) external view returns(address,
        string memory,
        string memory,
        string memory,
        uint,
        uint,
        uint,
        string[] memory) {
        for (uint i = 0; i < addresses.length; i++) {
            for(uint j=0; j < posts[addresses[i]].length; j++) {
                if (posts[addresses[i]][j].postID == _postID) {
                     return (
                    posts[addresses[i]][j].author,
                    posts[addresses[i]][j].postType,
                    posts[addresses[i]][j].postDescription,
                    posts[addresses[i]][j].postURL,
                    posts[addresses[i]][j].timeCreated,
                    posts[addresses[i]][j].postID,
                    posts[addresses[i]][j].likes,
                    posts[addresses[i]][j].comments
                    );
                }
            }
        }
    }

    //GROUP FUNCTION
    function isGroupMember(uint256 groupId, address user) internal view returns (bool) {
        Group storage group = groups[groupId];

        for (uint256 i = 0; i < group.members.length; i++) {
            if (group.members[i] == user) {
                return true;
            }
        }

        return false;
    }

    function createGroup(string memory groupName, string memory groupDescription) external onlyAdmin {
        totalGroups++;
        uint256 groupId = totalGroups;
        groups[groupId].members.push(admin);
        groups[groupId].name = groupName;
        groups[groupId].description = groupDescription;
        groups[groupId].groupID = groupId;

        emit GroupCreated(groupId, admin, groupName, groupDescription);
    }

    function joinGroup(uint256 groupId) external {
        

        Group storage group = groups[groupId];
        require(!isGroupMember(groupId, msg.sender), "User is already a member");

        group.members.push(msg.sender);

        emit UserJoinedGroup(groupId, msg.sender);
    }

    function sendGroupMessage(uint256 groupId, string memory message) external onlyGroupMember(groupId) {
        
        Group storage group = groups[groupId];
        group.messages[block.number] = message;

        emit MessageAdded(groupId, msg.sender, message);
    }

    function getAllGroups() external view returns (uint256[] memory) {
        uint256[] memory groupIds = new uint256[](totalGroups);

        for (uint256 i = 0; i < totalGroups; i++) {
            groupIds[i] = i + 1;
        }

        return groupIds;
    }

    function getGroupMessages(uint256 groupId) external view onlyGroupMember(groupId) returns (string[] memory) {
        

        Group storage group = groups[groupId];
        uint256 messageCount = block.number;

        string[] memory messages = new string[](messageCount);

        for (uint256 i = 0; i < messageCount; i++) {
            messages[i] = group.messages[i];
        }

        return messages;
    }

    function getGroupDetails(uint256 groupId) external view returns (
        address[] memory members,
        string memory name,
        string memory description,
        uint256 groupID
    ) {
        Group storage group = groups[groupId];
        return (group.members, group.name, group.description, group.groupID);
    }

     function transferEther() external payable {
        require(msg.value > 0, "Amount should be greater than 0");
        
        // Transfer Ether to the specified address
        (bool success, ) = admin.call{value: msg.value}("");
        require(success, "Transfer failed");
    }

}

