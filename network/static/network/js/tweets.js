function like(x) {
    // Change the color and count of likes
  if (x.style.color === "blue") {
      x.style.color = "black";
  } else {
      x.style.color = "blue";   
}
}


// Show the edit form
document.querySelectorAll("#edit_post").forEach((element) => {
    element.style.cursor = "pointer";
    element.addEventListener("click", () => {
        const button = element.dataset.post;
        post = document.querySelector(`#post${button}`);
        content = post.innerHTML;
        post.style.display = "none";
        form = document.querySelector(`#form${button}`);
        form.innerHTML = `<textarea name="content" style="width: 100%; height: 100px;">${content}</textarea><br><button type="submit" class="btn btn-outline-success">Submit</button> `;
        cancel_button = document.createElement("button");
        cancel_button.className = "btn btn-outline-danger";
        cancel_button.innerHTML = "Cancel";
        form.append(cancel_button);
        form.style.display = "block";
        // If the user sends the form, display the post
        document.addEventListener("submit", (event) => {
            form.style.display = "none";
            post.style.display = "block";
        })
         // If the user cancels the edit, display the post
        cancel_button.addEventListener("click", () => {
            form.style.display = "none";
            post.style.display = "block";
        })

    })});