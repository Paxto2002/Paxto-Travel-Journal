import travelData from "./details";
import Header from "./components/Header";
import Myentry from "./components/Myentry";
import Footer from "./components/Footer";

function App() {
  const entryElements = travelData.map((entry, id) => {
    return (
      <Myentry
        key={entry.id}
        // entry={entry}}
        {...entry}
      />
    );
  });

  return (
    <>
      <Header />
      {entryElements}
      <Footer />
    </>
  );
}

export default App;
