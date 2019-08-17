// Fake data
const data = [
    {
        name: 'John Doe',
        age: 33,
        lookingfor: 'female',
        gender: 'male',
        location: 'Amsterdam ND',
        image: 'https://randomuser.me/api/portraits/men/12.jpg'
    },
    {
        name: 'Katie Smith',
        age: 30,
        lookingfor: 'male',
        gender: 'female',
        location: 'London Uk',
        image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
        name: 'John Doe',
        age: 33,
        lookingfor: 'male',
        gender: 'male',
        location: 'Kyiv UA',
        image: 'https://randomuser.me/api/portraits/men/22.jpg'
    },
    {
        name: 'Natalie Duch',
        age: 33,
        lookingfor: 'female',
        gender: 'female',
        location: 'Berlin DE',
        image: 'https://randomuser.me/api/portraits/women/33.jpg'
    }            
];

document.getElementById('next').addEventListener('click', showNextProfile);

const profile = profileGenerator(data);

// Show profile on page load
showNextProfile();

// Iterator function, increments number of profile.
function profileGenerator(profiles) {
    let index = 0;

    return {
        next: function() {
            return index < profiles.length ?
            {value: profiles[index++], done: false} :
            {done: true}
        }
    }
}
// Function which shows the profiles
function showNextProfile() {

    const currentProfile = profile.next().value;

    if(currentProfile !== undefined) {

        document.getElementById('profileDisplay').innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${currentProfile.name}</li>
                <li class="list-group-item">Age: ${currentProfile.age}</li>
                <li class="list-group-item">${currentProfile.gender} is looking for a ${currentProfile.lookingfor}</li>
                <li class="list-group-item">Location: ${currentProfile.location}</li>
            </ul>
        `
        document.getElementById('imageDisplay').innerHTML = `
            <img src="${currentProfile.image}" alt="${currentProfile.name}">
        `
    } else {
        window.location.reload();
    }
}