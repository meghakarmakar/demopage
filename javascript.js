const toggleSidebarButton1 = document.getElementById("toggleSidebarButton1"); //small
const toggleSidebarButton2 = document.getElementById("toggleSidebarButton2"); //big
const sidebar1 = document.querySelector(".sidebar"); //big
const sidebar2 = document.querySelector(".sidebar2"); //small

sidebar1.style.transform = "translateX(-100%)"; // Initially hide sidebar1
sidebar2.style.transform = "translateX(0)"; // Initially show sidebar2

toggleSidebarButton1.addEventListener("click", function () {
  sidebar1.style.transform = "translateX(0)";
  sidebar2.style.transform = "translateX(-100%)";
});

toggleSidebarButton2.addEventListener("click", function () {
  sidebar1.style.transform = "translateX(-100%)";
  sidebar2.style.transform = "translateX(0%)";
});

const projects = {
  _id: {
    $oid: "63b64dc9e3b230ebb60a495d",
  },
  _key: "topic:2085",
  category: "Course",
  cid: {
    $numberDouble: "NaN",
  },
  commitment: "4 hours",
  commitment_type: "custom",
  deadline: "",
  description:
    "<p>Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.</p>\n<p>Let's prepare Sandwiches, we will use Pareto&rsquo;s Law. That&rsquo;s an 80-20 approach.<br>80% of the time in researching, and planning and 20% of the time in implementation.</p>\n<p>So for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.</p>\n<p>Similarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.</p>\n<p>Let's start thinking together, and search for how you can get the essence of project management.</p>",
  faqs: [],
  globalTags: [],
  isActive: true,
  lastposttime: 0,
  learning_outcomes: [
    "Bare minimum knowledge of project management",
    "4SA Concept",
    "Would be able to handle any project efficiently",
  ],
  mainPid: 0,
  postcount: 0,
  pre_requisites: [
    "An open mind to learn any concept",
    "Thought of Unlearning and Relearning ",
  ],
  project_image:
    "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
  short_description:
    "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",
  slug: "2085/technical-project-management",
  status: "published",
  tasks: [
    {
      task_id: 18882,
      task_title: "Explore the world of management",
      task_description:
        "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
      status: "notworkyet",
      assets: [
        {
          asset_id: 18883,
          asset_title: "Technical Project Management",
          asset_description:
            "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
          asset_content: " https://www.youtube.com/embed/TiMRwri1xJ8",
          asset_type: "display_asset",
          asset_content_type: "video",
        },
        {
          asset_id: 18884,
          asset_title: "Threadbuild",
          asset_description:
            "Watch the video and thread build, and jot out key threads while watching that video.",
          asset_content: " ",
          asset_type: "input_asset",
          asset_content_type: "threadbuilder",
        },
        {
          asset_id: 18885,
          asset_title: "Structure you pointers ",
          asset_description:
            "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
          asset_content: " ",
          asset_type: "input_asset",
          asset_content_type: "article",
        },
        {
          asset_id: 18886,
          asset_title: "4SA Method",
          asset_description: "To explore more read more",
          asset_content:
            " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
          asset_type: "display_asset",
          asset_content_type: "article",
        },
      ],
    },
  ],
  tid: 2085,
  timestamp: 1672891849700,
  title: "Technical Project Management",
  type: "project",
  uid: 100,
  viewcount: 0,
  publishedAt: 1672893847792,
};

const renderProjects = (projects) => {
  const container = document.getElementById("project-container");

  projects.tasks.forEach((project) => {

    container.innerHTML = `<h1>${project.task_title}</h1><p>${project.task_description}</p>`;


    const assetCards = project.assets.map((asset, index) => {

      return (asset.asset_content_type === 'video' ? `
        <div class="bodyPart${index + 1}">
          <div class="bodyHeading${index + 1}">
            <p class="Bhead1">${asset.asset_title}</p>
          </div>
          <div class="bodyPart${index + 1}Discription${index + 1}">
            <b>Description:</b>
            ${asset.asset_description}
          </div>
          <div class="bodyPart${index + 1}${asset.asset_content_type}${index + 1}">
               <iframe class="bodyPart1Video1" width="49" height="300" src=${asset.asset_content}
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
          </div>
        </div>`:
        asset.asset_id === 18886 ?
          `<div class="bodyPart${index + 1}">
          <div class="bodyHeading${index + 1}">
            <p class="Bhead1">${asset.asset_title}</p>
          </div>
          <div class="bodyPart${index + 1}Discription${index + 1}">
            <b>Description:</b>
             <a href=${asset.asset_content} target="_blank">${asset.asset_description}</a>
          </div>
          <div class="bodyPart${index + 1}${asset.asset_content_type}${index + 1}">
               <div class="asset-content">
               </div>
          </div>

          <br />
                    <br />
          <br />
          <br />
          <br />
          <br />



          <div class="container2">
        <!-- Introduction Section -->
        <div class="section">
            <div class="section-title">Introduction</div>
            <div class="content active">
                The 4SA Method, How to bring an idea into progress?
                <div class="see-more">See More</div>
            </div>
        </div>

        <!-- Thread A Section -->
        <div class="section">
            <div class="section-title">Thread A</div>
            <div class="content">
                How are you going to develop your strategy? Which method are you going to use to develop a strategy? What if the project is lengthy?
                <div class="see-more">See More</div>
            </div>
        </div>

        <!-- Example 1 Section -->
        <div class="section example">
            <strong>Example 1</strong>
            <div>You have a concept, How will you put it into progress?</div>
        </div>
    </div>

    <script>
        // JavaScript for Collapsible Sections
        const sectionTitles = document.querySelectorAll('.section-title');

        sectionTitles.forEach(title => {
            {title.addEventListener('click', () => {
                title.classList.toggle('active');
                const content = title.nextElementSibling;
                content.classList.toggle('active');
            }});
        });
    </script>





          
        </div>` :
        asset.asset_id === 18885 ?
          `<div class="bodyPart${index + 1}">
          <div class="bodyHeading${index + 1}">
            <p class="Bhead1">${asset.asset_title}</p>
          </div>
          <div class="bodyPart${index + 1}Discription${index + 1}">
            <b>Description:</b>
            ${asset.asset_description}
          </div>
          <div class="bodyPart${index + 1}${asset.asset_content_type}${index + 1}">
          </div>

          <br />

           <div class="container">
    <form class="form">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" id="title" class="form-input" placeholder="Enter the title">
      </div>
      <div class="form-group">
        <label for="content">Content</label>
        <div class="editor-container">
          <div class="toolbar">
            <button type="button">File</button>
            <button type="button">Edit</button>
            <button type="button">View</button>
            <button type="button">Insert</button>
            <button type="button">Format</button>
            <button type="button">Tools</button>
            <button type="button">Table</button>
            <button type="button">Help</button>
          </div>
          <textarea id="content" class="editor" placeholder="Write your content here..."></textarea>
        </div>
      </div>
    </form>
  </div>

        </div>`:
        `<div class="bodyPart${index + 1}">
          <div class="bodyHeading${index + 1}">
            <p class="Bhead1">${asset.asset_title}</p>
          </div>
          <div class="bodyPart${index + 1}Discription${index + 1}">
            <b>Description:</b>
            ${asset.asset_description}
          </div>
          <div class="bodyPart${index + 1}${asset.asset_content_type}${index + 1}">
          </div>
          <br />
          <br />
          <br />
          <br />

          <div class="container2">
        <div class="header">
            <h2>Thread A</h2>
        </div>

        <div class="thread-box">
            <textarea placeholder="Enter Text Here"></textarea>
            <textarea placeholder="Enter Text Here"></textarea>
        </div>

        <div class="dropdowns">
            <select>
                <option>Select Category</option>
            </select>
            <select>
                <option>Select Process</option>
            </select>
        </div>

        <div class="add-subthread">
            <button>+ Sub Thread</button>
        </div>

        <div class="summary">
            <textarea placeholder="Summary for Thread A"></textarea>
        </div>
    </div>

        </div>`
      );
    }).join(''); // Combine all card structures into one string

    document.getElementById('assets').innerHTML = assetCards;

    // project.tasks.forEach((task) => {
    //   const taskDiv = document.createElement("div");
    //   taskDiv.className = "task";
    //   taskDiv.innerHTML = `<h3>${task.task_title}</h3>`;

    //   task.assets.forEach((asset) => {
    //     const assetDiv = document.createElement("div");
    //     assetDiv.className = "asset";
    //     assetDiv.innerHTML = `<p>${asset.asset_title} (Type: ${asset.type})</p>`;
    //     taskDiv.appendChild(assetDiv);
    //   });

    //   projectDiv.appendChild(taskDiv);
    // });

    // container.appendChild(projectDiv);
  });
};

renderProjects(projects);