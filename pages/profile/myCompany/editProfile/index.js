const treeArray = [
  {
    name: "Одежда, обувь и аксессуары",
    icon: "/assets/images/icons/category/t-shirt.svg",
    children: [
      {
        name: "Женская одежда",
        children: [
          { name: "Женская одежда" },
          { name: "Женская одежда" },
          { name: "Женская одежда" }
        ]
      },
      { name: "Мужская одежда" },
      { name: "Футболки" }
    ]
  },
  {
    name: "Продукты питания и напитки",
    icon: "/assets/images/icons/category/burger.svg",
    children: [
      { name: "Товары для дома" }
    ]
  },
  {
    name: "Игрушки и товары для детей",
    icon: "/assets/images/icons/category/robot.svg",
    children: [
      { name: "Товары для дома" }
    ]
  }
];

const selectedItems = [];

const categorySearch = document.getElementById("categorySearch");

categorySearch.addEventListener("input", () => {
  const value = categorySearch.value;
  const tree = document.getElementById("treeWrapper");
  const items = tree.querySelectorAll(".tree__item");
  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(value.toLowerCase())) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

function updateSelectedItemsDisplay() {
  document.getElementById("selectedCategory").value = selectedItems.join(", ");
}

function createTree(treeArray, depth = 0) {
  const tree = document.createElement("ul");
  const plValue = Math.max(14 - 2 * depth, 4);
  tree.className = depth === 0 ? "" : `pl-${plValue}`;
  if (depth === 0) {
    tree.classList.add("divide-y", "divide-grey-light", "space-y-[15px]");
  }

  treeArray.forEach(item => {
    const li = document.createElement("li");
    li.className = "tree__item";

    const div = document.createElement("div");
    div.className = "cursor-pointer w-fit flex items-center gap-2.5 pt-[15px] text-dark-logo";

    const iconDiv = document.createElement("div");
    if (item.icon) {
      iconDiv.className = "flex justify-center items-center p-2.5 rounded-full bg-logo-color w-[37px] h-[37px] lg-md:w-12 lg-md:h-12";
      const img = document.createElement("img");
      img.src = item.icon;
      img.alt = `${item.name}`;
      iconDiv.appendChild(img);
    }

    const span = document.createElement("span");
    span.textContent = item.name;

    span.addEventListener("click", () => {
      if (!item.children || item.children.length === 0) {
        const index = selectedItems.indexOf(item.name);
        if (index === -1) {
          selectedItems.push(item.name);
          span.classList.add("active");
        } else {
          selectedItems.splice(index, 1);
          span.classList.remove("active");
        }
        updateSelectedItemsDisplay()
      }
    });

    const toggleIcon = document.createElement("img");
    toggleIcon.src = "/assets/images/icons/ios-arrow.svg";
    toggleIcon.alt = "Expand";
    toggleIcon.className = "toggle-icon transform transition-transform";

    div.appendChild(iconDiv);
    div.appendChild(span);
    if (item.children && item.children.length > 0) {
      div.appendChild(toggleIcon);
      div.addEventListener("click", function() {
        const nextUl = li.querySelector("ul");
        nextUl.classList.toggle("hidden");
        toggleIcon.classList.toggle("rotate-180");
      });
    }

    li.appendChild(div);

    if (item.children && item.children.length > 0) {
      const childUl = createTree(item.children, depth + 1);
      childUl.className += " hidden";
      li.appendChild(childUl);
    }

    tree.appendChild(li);
  });

  return tree;
}

document.getElementById("treeWrapper").appendChild(createTree(treeArray));

const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent the default form submission behavior
  const formData = new FormData(this); // `this` refers to the form element
  const selectedItemsValue = formData.get("selectedCategory"); // Получение строки выбранных элементов

  const name = formData.get("name"); // Get the name value
  const description = formData.get("description"); // Get the description value

  console.log("Selected Items:", selectedItemsValue);
  console.log("Name:", name);
  console.log("Description:", description);
});
