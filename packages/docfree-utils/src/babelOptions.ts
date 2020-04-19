export default {
  presets: [
    [
      require.resolve('@babel/preset-env'),
      {
        targets: {
          ie: '9',
        },
      },
    ],
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-typescript'),
  ],
};
