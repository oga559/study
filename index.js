const onClickAdd = () => {
    //テキストボックスの値を取得して初期化
    const inputText = document.getElementById("add-text").value;
    //テキストボックスを空にする
    document.getElementById("add-text").value = "";

    createIncompleteList(inputText);

}

//未完了listからから指定の要素削除(共通化)
const deleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
}

const createIncompleteList = (text) => {
    //dom生成
    const div = document.createElement("div");
    const li = document.createElement("li");
    //li要素にテキストボックスの値代入
    li.innerText = text;

    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click",()=>{
        //押された親要素(div)を削除すために親要素指定
        deleteList(completeButton.parentNode);

        const addTarget = completeButton.parentNode;
        const text = addTarget.firstChild.innerText;

        addTarget.textContent = null;

        const li = document.createElement("li");
        li.innerText = text;

        const backButton = document.createElement("button");
        backButton.innerText = "戻す"

        backButton.addEventListener("click", () => {
            const delTarget = backButton.parentNode;
            document.getElementById("complete-list").removeChild(delTarget);

            const text = backButton.parentNode.firstElementChild.innerText;
            createIncompleteList(text);
        })

        addTarget.append(li);
        addTarget.appendChild(backButton);

        document.getElementById("complete-list").appendChild(addTarget);
    });

    const delButton = document.createElement("button");
    delButton.innerText = "削除";
    delButton.addEventListener("click",()=>{
        //押された親要素(div)を削除すために親要素指定
        deleteList(delButton.parentNode);
    });

    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(delButton);
    document.getElementById("incomplete-list").appendChild(div);
}

document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());




