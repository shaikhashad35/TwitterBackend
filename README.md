# TwitterBackend
Its Backend API for Twitter Application which have Login/signup, follow/unfollow, like/unlike, etc. functionalities. 
Basic Functionality 
User registration using unique username and a password
Checked basic validation for username and password with storing the password in encrypted format.
Unique username will be accepted. </br>
API (Post) : https://aqueous-tundra-14265.herokuapp.com/user/signup  </br>
Request :
{			
    "username":"ashad",
    "password":"shaikh"
}   </br>
User login (Including session maintenance using any means you’re comfortable with)   </br>
	API (Post) : https://aqueous-tundra-14265.herokuapp.com/user/login   </br>
Request :   </br>
{			
    "username":"ashad",
    "password":"shaikh"
}   </br>
	It will create/return a token which should be pass with twi-token   in header as an authorization for other apis   </br>
</br>
Follow, unfollow   </br>
Added follow and unfollow for the user(api will require token for that)
Added validation that cant unfollow to whom user deoast follow and cant follow of user already following
 https://aqueous-tundra-14265.herokuapp.com/user/follow/{username}
 https://aqueous-tundra-14265.herokuapp.com/user/unfollow/{username}

 </br>

Create, read, delete tweet (Twitter doesn’t support update, you won’t need to either.) </br>
Create - it accepts the tweet message in json body for request with token </br>

 https://aqueous-tundra-14265.herokuapp.com/tweet/tweet   </br>
{			
    "Message":"first tweet"
}   </br>

Delete -  Needs to pass tweet id which can be get by read method (feed)   </br>
 https://aqueous-tundra-14265.herokuapp.com/tweet/deletetweet/{tweet_id}

 </br>
Read -  It will show the tweet of only users to whom the user follows-
 </br>
 https://aqueous-tundra-14265.herokuapp.com//tweet/feed
 </br>
Get Tweet of specific user -
 https://aqueous-tundra-14265.herokuapp.com//tweet/tweet{username}
 </br>
Like/unlike :
 </br>
 https://aqueous-tundra-14265.herokuapp.com/tweet/like/{tweet_id}
 </br>
 https://aqueous-tundra-14265.herokuapp.com/tweet/dislike/{tweet_id}
 </br>
 Tech Stack : Node.JS, Express.JS
  </br>
Packages : mongoose, express, cors, bcrypt, jsonwebtoken

