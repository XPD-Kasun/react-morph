import EditorJS from "@editorjs/editorjs";
import { useEffect, useRef } from "react";
import { MorphProvider, useMorph } from "./components/morph";

export default function App() {

    const editorRef = useRef<EditorJS>(null);

    useEffect(() => {
        const editor = new EditorJS({
            holder: 'editor'
        });
        editorRef.current = editor;
    }, []);

    const getSource = () => {
        var rt = document.getElementById('rt');
        editorRef.current?.save().then((s) => {
            rt!.innerHTML = s.blocks[0].data.text;
            console.log(s.blocks[0].data.text);
        });
    };

    var morph = useMorph;
    console.log(morph);


    return (
        <div>
            <MorphProvider>
                <div>fn</div>
            </MorphProvider>
        </div>
    );
}