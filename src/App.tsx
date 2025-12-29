import Welcome from "./components/Welcome";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <Header />
      <h1>Hello World</h1>

      <div style={{ gap: "12px", display: "flex", flexDirection: "row" }}>
        <ProfileCard name='Harun' age={19} year={2006}/>
        <ProfileCard name='Haidar' age={18} year={2007}/>
      </div>

      <Welcome />
    </>
  );
}

export default App;
