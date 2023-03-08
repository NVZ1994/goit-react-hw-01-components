import PropTypes from 'prop-types';
import {ProfileWrapper,Statistic } from './Profile.styled'

export function Profile(props) {
  const { username, tag, location, avatar, stats: { followers, views, likes }, } = props;

  return(
    <ProfileWrapper key={username}>
  <div>
    <img
      src={avatar}
      alt={username}
    />
    <p>{username}</p>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>

  <Statistic>
    <li>
      <span>Followers</span>
      <span>{followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span>{views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{likes}</span>
    </li>
  </Statistic>
</ProfileWrapper>
  )
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.exact ({
  followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
})
}
