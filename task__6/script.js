const updateTextBtn = document.querySelector('#updateTextBtn');

updateTextBtn.addEventListener('click', () => {
  const likeIcon = document.querySelector('#like');
  const commentIcon = document.querySelector('#comment');
  const deleteIcon = document.querySelector('#delete');

  const inputLike = document.querySelector('#inputLike').value;
  const inputComment = document.querySelector('#inputComment').value;
  const inputDelete = document.querySelector('#inputDelete').value;
  if (inputLike) {
    likeIcon.textContent = inputLike;
  }
  if (inputComment) {
    commentIcon.textContent = inputComment;
  }
  if (inputDelete) {
    deleteIcon.textContent = inputDelete;
  }
});