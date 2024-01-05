# GitHub Profile App

This mobile application allows users to search for GitHub profiles by username, view user details, and navigate through followers and following lists. The app fetches GitHub user data using the GitHub REST API.

## Screenshot
![screenshot](https://github.com/jekingohel/GitHubProfileApp/assets/2361463/27e2ffa4-c789-4195-b194-7e8585c0960b)

## Features

### User Search

- A search bar enables users to fetch GitHub user profiles by username.
- If no user exists with the provided username, a "Not found" view is presented.
- If the user exists, a view displays the user's:
  - Avatar
  - Username
  - Name
  - Description
  - Follower count
  - Following count

### Followers/Following Lists

- Users can tap on the follower/following counts to navigate to a list view.
- The list view displays the user's followers or the users they are following.
- Tapping on a user in the list navigates to their profile view.

### Navigation

- Users can navigate backward through the navigation stack.

### Skeleton Screens

- Add skeleton screens to provide a visual indication of loading.

### Pull to Refresh

- Implement pull-to-refresh functionality to allow users to manually refresh data.

### Profile Caching & Cache Invalidation

- Implement profile caching to improve app performance.
- Add cache invalidation mechanisms to keep data up-to-date.

## Test Cases

#### User Search

- Verify the presence of the search bar.
- Test searching for a user that exists.
- Test searching for a user that doesn't exist.
- Verify the "Not found" view is displayed appropriately.

#### User Details

- Ensure user details are displayed correctly.
- Test navigating to a user's followers list.
- Test navigating to a user's following list.
- Verify the avatar, username, name, description, follower count, and following count.

#### Followers/Following List

- Test tapping on a follower/following count.
- Verify the list view displays the correct user information.
- Test tapping on a user in the list and verify navigation to their profile view.

#### Navigation

- Test navigating backward through the app.
- Ensure the expected views are displayed after navigation.

## Time Investment
The completion of this project required a thoughtful investment of time. The total hours dedicated to the development, testing, and refinement of the GitHub Profile App amounted to 10 hours.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/jekingohel/GitHubProfileApp.git
```

2. Change into the project directory:

```bash
cd GitHubProfileApp
```

3. Install dependencies:

```bash
# using npm
npm install

# OR using Yarn
yarn install
```

## Usage

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Testing

```bash
# using npm
npm test -- -u

# OR using Yarn
yarn test -- -u
```
