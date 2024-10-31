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

                postFooter.appendChild(likeButton);
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
}
