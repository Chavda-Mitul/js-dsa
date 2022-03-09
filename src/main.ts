import { LinkedList } from "./data-structures/LinkedList";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello!</h1>
  <a href="https://github.com/Aditya1942/js-dsa" target="_blank">Repo</a>
`;

const linkedList = new LinkedList();
linkedList.append("appended");
console.log(linkedList.toString());
linkedList.prepend("prepended");
console.log(linkedList.toString());
