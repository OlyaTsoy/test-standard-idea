const updateTextBtn = document.querySelector('#updateTextBtn');

updateTextBtn.addEventListener('click', () => {
  const likeIcon = document.querySelector('#like');
  const commentIcon = document.querySelector('#comment');
  const deleteIcon = document.querySelector('#delete');

  const inputLike = document.querySelector('#inputLike').value;
  const inputComment = document.querySelector('#inputComment').value;
  const inputDelete = document.querySelector('#inputDelete').value;

  likeIcon.textContent = inputLike;
  commentIcon.textContent = inputComment;
  deleteIcon.textContent = inputDelete;
});