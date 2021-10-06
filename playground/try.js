function a(d, e = undefined) {
  try {
    console.log(d, e);
  } catch (e) {
    console.log(b);
  }
}
a(undefined, 20);
