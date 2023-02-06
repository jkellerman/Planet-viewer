export interface IActiveTabContext {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.AllHTMLAttributes<
          Partial<globalThis.HTMLElementTagNameMap["model-viewer"]>
        >,
        Partial<globalThis.HTMLElementTagNameMap["model-viewer"]>
      >;
    }
  }
}
