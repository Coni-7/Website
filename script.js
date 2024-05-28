document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');

    // Create video background
    const video = document.createElement('video');
    video.setAttribute('autoplay', '');
    video.setAttribute('loop', '');
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.id = 'bgvid';
    const source = document.createElement('source');
    source.src = 'Space.mp4';
    source.type = 'video/mp4';
    video.appendChild(source);
    mainContent.appendChild(video);

    // Create content div
    const content = document.createElement('div');
    content.className = 'content';

    // Greeting and name
    const greeting = document.createElement('h1');
    greeting.id = 'greeting';
    const nameLink = document.createElement('a');
    nameLink.href = 'https://www.linkedin.com/in/janpolad-gulusoylu-b6886328b/';
    nameLink.className = 'name-link';
    nameLink.textContent = 'Janpolad Gulusoylu';
    greeting.textContent = 'Hello, I am ';
    greeting.appendChild(nameLink);
    content.appendChild(greeting);

    // Profession
    const profession = document.createElement('h2');
    profession.textContent = 'I am a Software Engineer.';
    content.appendChild(profession);

    // Button group
    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'button-group';
    const buttons = [
        {text: 'Software Engineering Projects →', link: 'link-to-your-portfolio'},
        {text: 'Game Development Projects →', link: 'link-to-your-projects'},
        {text: '3D Modeling & Design Projects →', link: 'link-to-your-contact-info'}
    ];
    buttons.forEach(btn => {
        const button = document.createElement('a');
        button.href = btn.link;
        button.className = 'nav-button';
        button.textContent = btn.text;
        buttonGroup.appendChild(button);
    });
    content.appendChild(buttonGroup);

    mainContent.appendChild(content);
});


