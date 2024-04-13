import { HomeViewModel } from "./ViewModel";
import { HomeView } from "./View";

const Home: React.FC = () => {
  const viewModel = HomeViewModel();
  return <HomeView {...viewModel} />;
};

export default Home;