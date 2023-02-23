import { Observable } from "rxjs";
function recieveEvents(observable: Observable<string>) {
  observable.subscribe({
    next: str => {
      console.log(`Event received: ${str}`);
    },
    complete: () => console.log("Sequence ended")
  });
}
