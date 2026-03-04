const loadLesson = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    //promise of a response.
    .then((res) => res.json())
    //Promise of a JSON Data.
    .then((json) => displayLesson(json.data));
};

const displayLesson = (lessons) => {
  //  1. Get the container and make it empty.
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";
  //  2. Get into every lesson.
  for (const lesson of lessons) {
    // 3. Create elements for every lesson.

    console.log(lesson);

    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
     <button href="" class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}
     </button>
    `;
    // 4. Append into the container.

    levelContainer.append(btnDiv);
  }
};

loadLesson();
