// import { Context, createContext, PureComponent } from "react";
// import { SinglePurposeEmitter } from "utils";

// export interface DnDContextValue {
//   dragEmitter: SinglePurposeEmitter;
//   dropEmitter: SinglePurposeEmitter;
// }

// export const DnDContext: Context<DnDContextValue> = createContext(null);

// export default class DnDProvider extends PureComponent<void, void> {
//   public emitters: DnDContextValue = {
//     dragEmitter: new SinglePurposeEmitter(),
//     dropEmitter: new SinglePurposeEmitter()
//   };

//   public render(): JSX.Element {
//     return <DnDContext.Provider value={this.emitters}>{this.props.children}</DnDContext.Provider>;
//   }
// }
export {};
