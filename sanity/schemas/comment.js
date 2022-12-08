export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Comment Image',
      type: 'string',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'profileImg',
      title: 'Proifle Image',
      type: 'string',
    },
    {
      name: 'tweet',
      title: 'Tweet',
      description: 'Reference the Tweet the comment is associated to:',
      type: 'reference',
      to: {
        type: 'tweet',
      },
    },
    {
      name: 'displayName',
      title: 'Display Name',
      type: 'string',
    },
  ],
};
