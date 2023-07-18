import { G, Path, Rect, Svg } from "react-native-svg";

export default function HomeNavigationIcon({ stroke }) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G id="feather-icon / grid">
        <Rect width="24" height="24" fill="white" />
        <Path
          id="Rectangle-path"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 3H10V10H3V3Z"
          stroke={stroke}
          stroke-opacity="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          id="Rectangle-path_2"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 3H21V10H14V3Z"
          stroke={stroke}
          stroke-opacity="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          id="Rectangle-path_3"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 14H21V21H14V14Z"
          stroke={stroke}
          stroke-opacity="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          id="Rectangle-path_4"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 14H10V21H3V14Z"
          stroke={stroke}
          stroke-opacity="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </Svg>
  );
}
