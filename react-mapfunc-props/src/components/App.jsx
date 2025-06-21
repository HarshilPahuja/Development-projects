import Entry from "./Entry";
import emojipedia from "../emojipedia";

function CreateEntry(entry){
  return  <Entry image={entry.emoji} name={entry.name} meaning={entry.meaning} ></Entry>

}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(CreateEntry)}
        
      </dl>
    </div>
  );
}

export default App;
