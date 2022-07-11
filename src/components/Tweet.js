import User from "./User";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">
      {/* <img
        src={props.tweet.user.image}
        className="profile"
        alt="profile"
      /> */}
      <ProfileImage profileImage={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          {/* <span className="user">
            <span className="name">{props.tweet.user.name}</span>
            
            <span className="handle">{props.tweet.user.handle}</span>
          </span> */}
          <User user={props.tweet.user} />

          {/* <span className="timestamp">{props.tweet.timestamp}</span> */}
          <Timestamp timestamp={props.tweet.timestamp} />
          
        </div>
        <Message message={props.tweet.message} />

        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
