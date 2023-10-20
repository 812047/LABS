// JSVector -- a Javascript 2D vector class

// The class constructor
function JSVector(x = 0, y = 0) {
  // called with two arguments
  this.x = x;
  this.y = y;
}

// Set the magnitude of the vector,
// retaining the angle (direction).
JSVector.prototype.setMagnitude = function (mag) {
  let theta = this.getDirection();
  this.x = Math.cos(theta) * mag;
  this.y = Math.sin(theta) * mag;
}

// Get the magnitude of the vector using pythagorean theorem
JSVector.prototype.getMagnitude = function () {
  return Math.sqrt(this.x * this.x + this.y * this.y);
}

// Set the angle (direction) of the vector,
// retaining the magnitude.
JSVector.prototype.setDirection = function (angle) {
  let mag = this.getMagnitude();
  this.x = Math.cos(angle) * mag;
  this.y = Math.sin(angle) * mag;
}

// Get the direction (angle) of the vector
JSVector.prototype.getDirection = function () {
  let theta = 0;
  theta = Math.atan2(this.y, this.x);
  return theta;
}


// Add another vector to this vector
JSVector.prototype.add = function (v2) {
  this.x += v2.x;
  this.y += v2.y;
  // return this;
}

// Subtract another vector from this vector
JSVector.prototype.sub = function (v2) {
  this.x -= v2.x;
  this.y -= v2.y;
}

// Class method to return a new vector that is the sum of two vectors
JSVector.addGetNew = function (v1, v2) {
  return new JSVector(v1.x + v2.x, v1.y + v2.y);
}

// Class method to return a new vector that is the difference of two vectors
JSVector.subGetNew = function (v1, v2) {
  return new JSVector(v1.x - v2.x, v1.y - v2.y);
}

// Multiply this vector by a scalar
JSVector.prototype.multiply = function (scalar) {
  this.x *= scalar;
  this.y *= scalar;
}

// Divide this vector by a scalar
JSVector.prototype.divide = function (scalar) {
  this.x /= scalar;
  this.y /= scalar;

}

// Normalize this vector so that it has a magnitude of 1
JSVector.prototype.normalize = function () {
  this.x /= this.x;
  this.y /= this.y;
}

// Limit the magnitude of this vector
JSVector.prototype.limit = function (lim) {
  if (Math.abs(this.x) > lim) {
    if (this.x > 0) {
      this.x = lim;
    } else {
      this.x = -lim;
    }
  }

  if (Math.abs(this.y) > lim) {
    if (this.y > 0) {
      this.y = lim;
    } else {
      this.y = -lim;
    }
  }
}

// Get the distance between this vector and another one
JSVector.prototype.distance = function (v2) {
  let dx = this.x - v2.x;
  let dy = this.y - v2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

// Get square of the distance between this vector and another one
JSVector.prototype.distanceSquared = function (v2) {
  let dx = this.x - v2.x;
  let dy = this.y - v2.y;
  return (dx * dx + dy * dy);
}

// Rotate this vector by some number of radians
// using the rotation matrix |  cos   -sin  |
//                           |  sin   +cos  |

JSVector.prototype.rotate = function (angle) {
  let x = this.x;
  let y = this.y;
  let sin = Math.sin(angle);
  let cos = Math.cos(angle);
  this.x = x*cos - y*sin;
  this.y = x*sin + y*cos;
  
}

// Get the angle between this vector and another one
JSVector.prototype.angleBetween = function (v2) {
  return (this.getDirection() - v2.getDirection());
}

// Make a copy of this vector
JSVector.prototype.copy = function () {
  return new JSVector(this.x, this.y);

}

// Override inherited toString() to describe this instance
JSVector.prototype.toString = function () {
  return "x = " + this.x + " y = " + this.y + " m = " + this.getMagnitude() + " a = " + this.getDirection();
}
