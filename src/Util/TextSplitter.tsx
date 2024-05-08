class TextSplitter {
    readonly target: Element;
    readonly default: Node;
    readonly words: HTMLDivElement[];
    readonly chars: HTMLDivElement[];
    readonly charWrappers: HTMLDivElement[];

    constructor(properties: TextSplitterProperties) {
        this.target = properties.target;
        this.default = this.target.cloneNode(true);
        this.words = [];
        this.chars = [];
        this.charWrappers = [];

        let parse = (target: Node) => {
            let childNodes = [...target.childNodes];
            for (let iNode = 0; iNode < childNodes.length; iNode++) {
                let node = childNodes[iNode];

                if (node.nodeType != Node.TEXT_NODE) {
                    parse(node);
                    continue;
                }

                let words = node.textContent?.split(" ")
                    .filter(e => e.length != 0)
                    .map(word => {
                        let wordDiv = document.createElement("div");
                        Object.assign(wordDiv.style, { display: "inline-block", ...(properties.wordStyle || properties.style || {}) });
                        
                        for (let char = 0; char < word.length; char++) {
                            let charDiv = document.createElement("div");

                            if (properties.wrapChars) {
                                let innerDiv = document.createElement("div");
                                Object.assign(innerDiv.style, { display: "inline-block", ...(properties.charWrapperStyle || properties.style || {}) });

                                innerDiv.textContent = word[char];

                                this.charWrappers.push(innerDiv);
                                charDiv.appendChild(innerDiv);
                            } else {
                                charDiv.textContent = word[char];
                            }

                            Object.assign(charDiv.style, { display: "inline-block", ...(properties.charStyle || properties.style || {}) });
                            
                            this.chars.push(charDiv);
                            wordDiv.appendChild(charDiv);
                        }

                        this.words.push(wordDiv);
                        return wordDiv;
                    });

                words?.forEach((word, index) => {
                    if (index != 0) target.insertBefore(document.createTextNode(" "), node);
                    target.insertBefore(word, node);
                });
                
                node.remove();
            }
        }

        parse(this.target);
    }

    revert() {
        while (this.target.hasChildNodes()) this.target.childNodes[0].remove();

        this.words.length = 0;
        this.chars.length = 0;
        this.charWrappers.length = 0;

        this.target.append(...this.default.childNodes);
    }
}

interface TextSplitterProperties {
    target: Element;
    style?: React.CSSProperties;
    wordStyle?: React.CSSProperties;
    charStyle?: React.CSSProperties;
    charWrapperStyle?: React.CSSProperties;
    wrapChars?: boolean;
}

export { TextSplitter };
