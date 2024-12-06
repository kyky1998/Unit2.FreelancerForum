// Freelancer data
// Freelancer data (with names, occupations, and prices)
const freelancers = [
  { name: 'Alice', occupation: 'Writer', price: 30 },
  { name: 'Bob', occupation: 'Teacher', price: 50 },
  { name: 'Carol', occupation: 'Programmer', price: 70 },
  { name: 'Dr. Smith', occupation: 'Landscaper', price: 25 },
  { name: 'Dr. Pressure', occupation: 'Doctor', price: 51 },
  { name: 'Prof. Possibility', occupation: 'Therapist', price: 20 },
  { name: 'Prof. Prism', occupation: 'Gym Teacher', price: 15 },
  { name: 'Dr. Impulse', occupation: 'Dentist', price: 40 },
  { name: 'Prof. Spark', occupation: 'Journalist', price: 32 },
  { name: 'Dr. Wire', occupation: 'Lawyer', price: 60 },
  { name: 'Prof. Goose', occupation: 'Judge', price: 55 }
];

// Initially displayed freelancers
let displayedFreelancers = [];

// Function to calculate and update the average price
function updateAveragePrice() {
  const totalPrice = displayedFreelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
  const averagePrice = totalPrice / displayedFreelancers.length;
  document.getElementById('average-price').textContent = `$${averagePrice.toFixed(2)}`;
}

// Function to display the list of random freelancers
function displayFreelancers() {
  const randomNamesElement = document.getElementById('random-name');
  randomNamesElement.innerHTML = ''; // Clear the existing list of freelancers

  displayedFreelancers.forEach(freelancer => {
    const freelancerElement = document.createElement('p');
    freelancerElement.innerHTML = `<strong>${freelancer.name}</strong> (${freelancer.occupation}) - $${freelancer.price}`;
    randomNamesElement.appendChild(freelancerElement);
  });

  // Update the average price whenever the list is updated
  updateAveragePrice();
}

// Function to add a new random freelancer every 4 seconds
function addRandomFreelancer() {
  if (displayedFreelancers.length >= freelancers.length) {
    console.log('All freelancers have been displayed!');
    return; // No more freelancers to add
  }

  // Pick a random freelancer
  let randomFreelancer;
  do {
    randomFreelancer = freelancers[Math.floor(Math.random() * freelancers.length)];
  } while (displayedFreelancers.some(f => f.name === randomFreelancer.name)); // Ensure no duplicates

  // Add the new freelancer to the displayedFreelancers array
  displayedFreelancers.push(randomFreelancer);

  // Update the DOM with the new list of freelancers
  displayFreelancers();
}

// Initialize the page
function initializePage() {
  // Display two random freelancers initially
  for (let i = 0; i < 2; i++) {
    addRandomFreelancer();
  }

  // Set interval to add a new random freelancer every 4 seconds
  setInterval(addRandomFreelancer, 4000);
}

// Start the page functionality
initializePage();
