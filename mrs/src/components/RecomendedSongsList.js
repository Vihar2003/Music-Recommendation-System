import React from 'react';

const RecommendedSongsList = ({ user_ID, data }) => {

    if (data === null) {
        return <></>
    }
  // Find the user object with the matching user_ID

  console.log(data);
  const userIdInt = parseInt(user_ID, 10);
  const user = data.find((userObj) => userObj.User_ID === userIdInt);

  // If the user is not found, display a message
  if (!user) {
    return <div>User not found</div>;
  }

  // Destructure the Recommended_Songs array from the user object
  const recommendedSongs = user.Recommended_Songs;

  // Generate a list of divs for recommended songs
  const tableRows = recommendedSongs.map(([songID, rating]) => (
    <tr key={songID}>
      <td>{songID}</td>
      <td>{rating}</td>
    </tr>
  ));

  return (
    <div>
      <h2>Recommended Songs for User {userIdInt}</h2>
      <table>
        <thead>
          <tr>
            <th>Song ID</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};

export default RecommendedSongsList;
