export default (theme) => ({
  grow: {
    flexGrow: 1,
  },
  offset: theme.mixins.toolbar,
  profilePicture: {
    width: '36px',
    height: '36px',
    marginRight: theme.spacing(1),
  },
  createPostButton: {
    marginLeft: theme.spacing(2),
  },
  logoutButton: {
    marginLeft: theme.spacing(1),
  },
});
