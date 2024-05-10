import NavBar from "@/components/NavBar";
import HomePage from "@/routes/HomePage";

const App = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <HomePage />
    </div>
  );
};

export default App;
