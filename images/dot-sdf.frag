// Author @patriciogv ( patriciogonzalezvivo.com ) - 2015

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float circleDF (vec2 st) {
    st -= .5;
    return dot(st,st)*3.1415;
}

void main(){
  vec2 st = gl_FragCoord.xy/u_resolution.xy;
  st.x *= u_resolution.x/u_resolution.y;
  
  vec3 color = vec3(0.);
  color += circleDF(st);

  gl_FragColor = vec4(color,1.0);
}