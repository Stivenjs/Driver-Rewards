export interface NavigationProp {
  navigate: (screen: string, params?: Record<string, unknown>) => void;
  goBack: () => void;
}

export interface ScreenProps {
  navigation: NavigationProp;
}
