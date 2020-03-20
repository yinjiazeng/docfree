import webpack from './webpack';

export default function() {
  webpack({
    mode: 'production',
  });
}
