document.addEventListener('DOMContentLoaded', function() {
const timelineData = [
    {
        date: 'Feb 2018 - Present',
        title: 'Delivery Manager',
        description: 'At Innovative Solutions Inc., I excel in generating creative and elusive bugs to keep our testing team busy and entertained. Regularly praised for crafting bugs that evade detection and defy logic.'
    },
    {
        date: 'Aug 2009 - Jan 2018',
        title: 'Project Lead',
        description: 'Offered a wide range of sarcasm consulting services. Helped clients understand the fine line between a hilarious email and an HR issue.'
    },
    {
        date: 'May 2008 - Jul 2009',
        title: 'Software Engineer',
        description: 'Worked at JavaGenius, a tech startup where the code was less important than the coffee. Received the "Caffeine Innovator" award for my cold brew technique that kept coders awake for 72 hours straight.'
    },
    {
        date: 'May 2005 - Jul 2008',
        title: 'Software Developer',
        description: 'Worked at Keane India, a tech startup where the code was less important than the coffee. Received the "Caffeine Innovator" award for my cold brew technique that kept coders awake for 72 hours straight.'
    }
];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });
});
