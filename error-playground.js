const sum = (a, b) => {
  if (a && b) return a + b;
  throw new Error("Invalid arguements");
};

try {
  console.log(sum(1));
} catch (error) {
  console.log(error.message);
}

console.log("After error");
