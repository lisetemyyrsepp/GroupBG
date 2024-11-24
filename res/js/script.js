window.onload = function() {
    //fetch('https://mocki.io/v1/c2d55a02-8b0d-4de5-8d4a-56ab35eb5c62') //./res/json/myjson.json or https://mocki.io/v1/c2d55a02-8b0d-4de5-8d4a-56ab35eb5c62
    fetch('./res/json/json.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(json => {
            console.log(json);
            const postsContainer = document.getElementById('posts-container');

            // Loop through each post in the JSON data
            for (const singlePost of json) {
                const divToHoldSinglePost = document.createElement('div');
                divToHoldSinglePost.className = 'defaultBox';

                const postHeader = document.createElement('div');
                postHeader.className = 'post-header';

                const profilePic = document.createElement('img');
                profilePic.className = 'post-profile-pic';
                profilePic.src = singlePost.authorImage;
                profilePic.alt = "Profile picture";

                const postDate = document.createElement('span');
                postDate.className = 'post-date';
                postDate.innerHTML = singlePost.date;

                postHeader.appendChild(profilePic);
                postHeader.appendChild(postDate);
                divToHoldSinglePost.appendChild(postHeader);

                if (singlePost.image) {
                    const postImage = document.createElement('img');
                    postImage.className = 'post-image';
                    postImage.src = singlePost.image;
                    postImage.alt = "Post Image";
                    divToHoldSinglePost.appendChild(postImage);
                }

                const postContent = document.createElement('p');
                postContent.className = singlePost.image ? 'post-caption' : 'post-message';
                postContent.innerHTML = singlePost.caption || singlePost.message;

                divToHoldSinglePost.appendChild(postContent);

                const postFooter = document.createElement('div');
                postFooter.className = 'post-footer';

                const likeButton = document.createElement('img');
                likeButton.className = 'like-button';
                likeButton.src = "res/images/Facebook_Thumb_icon.svg.png";
                likeButton.alt = "Like Button";

                const likesCount = document.createElement('span');
                likesCount.className = 'likes-count';
                likesCount.innerText = ' 0 Likes';

                let likes = 0;
                likeButton.addEventListener('click', () => {
                    likes++;
                    likesCount.innerText = ` ${likes} Likes`;
                });

                postFooter.appendChild(likeButton);
                postFooter.appendChild(likesCount);
                divToHoldSinglePost.appendChild(postFooter);

                postsContainer.appendChild(divToHoldSinglePost);
            }
        })
        .catch(err => {
            console.error('Error fetching data:', err);
            let errDiv = document.createElement("div");
            errDiv.className = 'defaultBox';
            errDiv.innerText = `Error fetching posts: ${err}`;
            document.getElementById('posts-container').appendChild(errDiv);
        })

    // Reset Likes Functionality
    document.getElementById('reset-likes-button').addEventListener('click', () => {
        const likesCounts = document.querySelectorAll('.likes-count');
        likesCounts.forEach((likesCount) => {
            likesCount.innerText = ' 0 Likes';
        });
    });
}

// Function to toggle the dropdown menu
function toggleDropdown() {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("show");
}

document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting initially

    const password = document.getElementById('password').value;
    const errorMessages = document.getElementById('errorMessages');

    const validatePassword = (password) => {
        const errors = [];
        if (password.length < 8 || password.length > 15) {
            errors.push("Password length should be between 8 and 15 characters.");
        }
    
        if (!/[A-Z]/.test(password)) {
            errors.push("Password must include at least one uppercase alphabet character.");
        }
    
        if ((password.match(/[a-z]/g) || []).length < 2) {
            errors.push("Password must include at least two lowercase alphabet characters.");
        }
    
        if (!/[0-9]/.test(password)) {
            errors.push("Password must include at least one numeric value.");
        }
    
        if (!/^[A-Z]/.test(password)) {
            errors.push("Password must start with an uppercase alphabet.");
        }
    
        if (!password.includes('_')) {
            errors.push('Password must include the character "_".');
        }
    
        return errors;
    };

    const errors = validatePassword(password);

    if (errors.length > 0) {
        errorMessages.innerHTML = `
            <p>Password is not valid. Please consider the following requirements:</p>
            <ul>${errors.map(err => `<li>${err}</li>`).join('')}</ul>
        `;
    } else {
        errorMessages.innerHTML = ''; // Clear errors if valid
        window.location.href = "index.html"; // Redirect to main page
    }
});
