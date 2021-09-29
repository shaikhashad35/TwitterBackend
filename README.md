# TwitterBackend

Basic Functionality (required)*
User registration using unique username and a password
Checked basic validation for username and password with storing the password in encrypted format.
Unique username will be accepted.
API (Post) : https://aqueous-tundra-14265.herokuapp.com/user/signup 
Request :
{			
    "username":"ashad",
    "password":"shaikh"
}
User login (Including session maintenance using any means you’re comfortable with)
	API (Post) : https://aqueous-tundra-14265.herokuapp.com/user/login
Request :
{			
    "username":"ashad",
    "password":"shaikh"
}
	It will create/return a token which should be pass with twi-token   in header as an authorization for other apis
Extended Functionality
Follow, unfollow
Added follow and unfollow for the user(api will require token for that)
Added validation that cant unfollow to whom user deoast follow and cant follow of user already following
 https://aqueous-tundra-14265.herokuapp.com/user/follow/{username}
 https://aqueous-tundra-14265.herokuapp.com/user/unfollow/{username}



Create, read, delete tweet (Twitter doesn’t support update, you won’t need to either.)
Create - it accepts the tweet message in json body for request with token

 https://aqueous-tundra-14265.herokuapp.com/tweet/tweet
{			
    "Message":"first tweet"
}

	Delete -  Needs to pass tweet id which can be get by read method (feed)
 https://aqueous-tundra-14265.herokuapp.com/tweet/deletetweet/{tweet_id}


Read -  It will show the tweet of only users to whom the user follows-

 https://aqueous-tundra-14265.herokuapp.com//tweet/feed

Get Tweet of specific user -
 https://aqueous-tundra-14265.herokuapp.com//tweet/tweet{username}

Extra Credit:
Like/unlike :

 https://aqueous-tundra-14265.herokuapp.com/tweet/like/{tweet_id}

 https://aqueous-tundra-14265.herokuapp.com/tweet/dislike/{tweet_id}

Packages : mongoose, express, cors, bcrypt, jsonwebtoken

