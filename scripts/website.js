(() => {
  // src/qr/lib/qrcode.ts
  function QRCode(r) {
    var n, t, o, e, a = [], f = [], i = Math.max, u = Math.min, h = Math.abs, v = Math.ceil, c = /^[0-9]*$/, s = /^[A-Z0-9 $%*+.\/:-]*$/, l = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", g = [[-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]], d = [[-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25], [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49], [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68], [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]], m = { L: [0, 1], M: [1, 0], Q: [2, 3], H: [3, 2] }, p = function(r2, n2) {
      for (var t2 = 0, o2 = 8; o2--; )
        t2 = t2 << 1 ^ 285 * (t2 >>> 7) ^ (n2 >>> o2 & 1) * r2;
      return t2;
    }, C = function(r2, n2) {
      for (var t2 = [], o2 = r2.length, e2 = o2; e2; )
        for (var a2 = r2[o2 - e2--] ^ t2.shift(), f2 = n2.length; f2--; )
          t2[f2] ^= p(n2[f2], a2);
      return t2;
    }, w = function(r2) {
      for (var n2 = [function() {
        return 0 == (t2 + o2) % 2;
      }, function() {
        return 0 == t2 % 2;
      }, function() {
        return 0 == o2 % 3;
      }, function() {
        return 0 == (t2 + o2) % 3;
      }, function() {
        return 0 == ((t2 / 2 | 0) + (o2 / 3 | 0)) % 2;
      }, function() {
        return 0 == t2 * o2 % 2 + t2 * o2 % 3;
      }, function() {
        return 0 == (t2 * o2 % 2 + t2 * o2 % 3) % 2;
      }, function() {
        return 0 == ((t2 + o2) % 2 + t2 * o2 % 3) % 2;
      }][r2], t2 = e; t2--; )
        for (var o2 = e; o2--; )
          f[t2][o2] || (a[t2][o2] ^= n2());
    }, b = function() {
      for (var r2 = function(r3, n3) {
        n3[6] || (r3 += e), n3.shift(), n3.push(r3);
      }, n2 = function(n3, o3, a2) {
        return n3 && (r2(o3, a2), o3 = 0), r2(o3 += e, a2), t2(a2);
      }, t2 = function(r3) {
        var n3 = r3[5], t3 = n3 > 0 && r3[4] == n3 && r3[3] == 3 * n3 && r3[2] == n3 && r3[1] == n3;
        return (t3 && r3[6] >= 4 * n3 && r3[0] >= n3 ? 1 : 0) + (t3 && r3[0] >= 4 * n3 && r3[6] >= n3 ? 1 : 0);
      }, o2 = 0, f2 = e * e, i2 = 0, u2 = e; u2--; ) {
        for (var c2 = [0, 0, 0, 0, 0, 0, 0], s2 = [0, 0, 0, 0, 0, 0, 0], l2 = false, g2 = false, d2 = 0, m2 = 0, p2 = e; p2--; ) {
          a[u2][p2] == l2 ? 5 == ++d2 ? o2 += 3 : d2 > 5 && o2++ : (r2(d2, c2), o2 += 40 * t2(c2), d2 = 1, l2 = a[u2][p2]), a[p2][u2] == g2 ? 5 == ++m2 ? o2 += 3 : m2 > 5 && o2++ : (r2(m2, s2), o2 += 40 * t2(s2), m2 = 1, g2 = a[p2][u2]);
          var C2 = a[u2][p2];
          C2 && i2++, p2 && u2 && C2 == a[u2][p2 - 1] && C2 == a[u2 - 1][p2] && C2 == a[u2 - 1][p2 - 1] && (o2 += 3);
        }
        o2 += 40 * n2(l2, d2, c2) + 40 * n2(g2, m2, s2);
      }
      return o2 += 10 * (v(h(20 * i2 - 10 * f2) / f2) - 1);
    }, A = function(r2, n2, t2) {
      for (; n2--; )
        t2.push(r2 >>> n2 & 1);
    }, M = function(r2, n2) {
      return r2.numBitsCharCount[(n2 + 7) / 17 | 0];
    }, B = function(r2, n2) {
      return 0 != (r2 >>> n2 & 1);
    }, x = function(r2, n2) {
      for (var t2 = 0, o2 = r2.length; o2--; ) {
        var e2 = r2[o2], a2 = M(e2, n2);
        if (1 << a2 <= e2.numChars)
          return 1 / 0;
        t2 += 4 + a2 + e2.bitData.length;
      }
      return t2;
    }, D = function(r2) {
      if (r2 < 1 || r2 > 40)
        throw "Version number out of range";
      var n2 = (16 * r2 + 128) * r2 + 64;
      if (r2 >= 2) {
        var t2 = r2 / 7 | 2;
        n2 -= (25 * t2 - 10) * t2 - 55, r2 >= 7 && (n2 -= 36);
      }
      return n2;
    }, I = function(r2, n2) {
      for (var t2 = 2; -2 <= t2; t2--)
        for (var o2 = 2; -2 <= o2; o2--)
          E(r2 + o2, n2 + t2, 1 != i(h(o2), h(t2)));
    }, H = function(r2, n2) {
      for (var t2 = 4; -4 <= t2; t2--)
        for (var o2 = 4; -4 <= o2; o2--) {
          var a2 = i(h(o2), h(t2)), f2 = r2 + o2, u2 = n2 + t2;
          0 <= f2 && f2 < e && 0 <= u2 && u2 < e && E(f2, u2, 2 != a2 && 4 != a2);
        }
    }, $ = function(r2) {
      for (var n2 = t[1] << 3 | r2, o2 = n2, a2 = 10; a2--; )
        o2 = o2 << 1 ^ 1335 * (o2 >>> 9);
      var f2 = 21522 ^ (n2 << 10 | o2);
      if (f2 >>> 15 != 0)
        throw "Assertion error";
      for (a2 = 0; a2 <= 5; a2++)
        E(8, a2, B(f2, a2));
      E(8, 7, B(f2, 6)), E(8, 8, B(f2, 7)), E(7, 8, B(f2, 8));
      for (a2 = 9; a2 < 15; a2++)
        E(14 - a2, 8, B(f2, a2));
      for (a2 = 0; a2 < 8; a2++)
        E(e - 1 - a2, 8, B(f2, a2));
      for (a2 = 8; a2 < 15; a2++)
        E(8, e - 15 + a2, B(f2, a2));
      E(8, e - 8, 1);
    }, O = function() {
      for (var r2 = e; r2--; )
        E(6, r2, 0 == r2 % 2), E(r2, 6, 0 == r2 % 2);
      for (var t2 = function() {
        var r3 = [];
        if (n > 1)
          for (var t3 = 2 + (n / 7 | 0), o3 = 32 == n ? 26 : 2 * v((e - 13) / (2 * t3 - 2)); t3--; )
            r3[t3] = t3 * o3 + 6;
        return r3;
      }(), o2 = r2 = t2.length; o2--; )
        for (var a2 = r2; a2--; )
          0 == a2 && 0 == o2 || 0 == a2 && o2 == r2 - 1 || a2 == r2 - 1 && 0 == o2 || I(t2[a2], t2[o2]);
      H(3, 3), H(e - 4, 3), H(3, e - 4), $(0), function() {
        if (!(7 > n)) {
          for (var r3 = n, t3 = 12; t3--; )
            r3 = r3 << 1 ^ 7973 * (r3 >>> 11);
          var o3 = n << 12 | r3;
          if (t3 = 18, o3 >>> 18 != 0)
            throw "Assertion error";
          for (; t3--; ) {
            var a3 = e - 11 + t3 % 3, f2 = t3 / 3 | 0, i2 = B(o3, t3);
            E(a3, f2, i2), E(f2, a3, i2);
          }
        }
      }();
    }, Q = function(r2) {
      if (r2.length != V(n, t))
        throw "Invalid argument";
      for (var o2 = d[t[0]][n], e2 = g[t[0]][n], a2 = D(n) / 8 | 0, f2 = o2 - a2 % o2, i2 = a2 / o2 | 0, u2 = [], h2 = function(r3) {
        var n2 = 1, t2 = [];
        t2[r3 - 1] = 1;
        for (var o3 = 0; o3 < r3; o3++) {
          for (var e3 = 0; e3 < r3; e3++)
            t2[e3] = p(t2[e3], n2) ^ t2[e3 + 1];
          n2 = p(n2, 2);
        }
        return t2;
      }(e2), v2 = 0, c2 = 0; v2 < o2; v2++) {
        var s2 = r2.slice(c2, c2 + i2 - e2 + (v2 < f2 ? 0 : 1));
        c2 += s2.length;
        var l2 = C(s2, h2);
        v2 < f2 && s2.push(0), u2.push(s2.concat(l2));
      }
      var m2 = [];
      for (v2 = 0; v2 < u2[0].length; v2++)
        for (var w2 = 0; w2 < u2.length; w2++)
          (v2 != i2 - e2 || w2 >= f2) && m2.push(u2[w2][v2]);
      return m2;
    }, S = function(r2) {
      for (var n2 = [], t2 = (r2 = encodeURI(r2), 0); t2 < r2.length; t2++)
        "%" != r2.charAt(t2) ? n2.push(r2.charCodeAt(t2)) : (n2.push(parseInt(r2.substr(t2 + 1, 2), 16)), t2 += 2);
      return n2;
    }, V = function(r2, n2) {
      return (D(r2) / 8 | 0) - g[n2[0]][r2] * d[n2[0]][r2];
    }, E = function(r2, n2, t2) {
      a[n2][r2] = t2 ? 1 : 0, f[n2][r2] = 1;
    }, R = function(r2) {
      for (var n2 = [], t2 = 0, o2 = r2; t2 < o2.length; t2++) {
        var e2 = o2[t2];
        A(e2, 8, n2);
      }
      return { modeBits: 4, numBitsCharCount: [8, 16, 16], numChars: r2.length, bitData: n2 };
    }, Z = function(r2) {
      if (!c.test(r2))
        throw "String contains non-numeric characters";
      for (var n2 = [], t2 = 0; t2 < r2.length; ) {
        var o2 = u(r2.length - t2, 3);
        A(parseInt(r2.substr(t2, o2), 10), 3 * o2 + 1, n2), t2 += o2;
      }
      return { modeBits: 1, numBitsCharCount: [10, 12, 14], numChars: r2.length, bitData: n2 };
    }, z = function(r2) {
      if (!s.test(r2))
        throw "String contains unencodable characters in alphanumeric mode";
      var n2, t2 = [];
      for (n2 = 0; n2 + 2 <= r2.length; n2 += 2) {
        var o2 = 45 * l.indexOf(r2.charAt(n2));
        o2 += l.indexOf(r2.charAt(n2 + 1)), A(o2, 11, t2);
      }
      return n2 < r2.length && A(l.indexOf(r2.charAt(n2)), 6, t2), { modeBits: 2, numBitsCharCount: [9, 11, 13], numChars: r2.length, bitData: t2 };
    }, L = function(r2, n2, t2, o2) {
      var e2 = function(r3) {
        return "" == r3 ? [] : c.test(r3) ? [Z(r3)] : s.test(r3) ? [z(r3)] : [R(S(r3))];
      }(r2);
      return U(e2, n2, t2, o2);
    }, N = function(r2, i2, u2, h2) {
      t = i2, o = h2;
      for (var v2 = e = 4 * (n = r2) + 17; v2--; )
        a[v2] = [], f[v2] = [];
      if (O(), function(r3) {
        for (var n2 = 0, t2 = 1, o2 = e - 1, i3 = o2; i3 > 0; i3 -= 2) {
          6 == i3 && --i3;
          for (var u3 = 0 > (t2 = -t2) ? o2 : 0, h3 = 0; h3 < e; ++h3) {
            for (var v3 = i3; v3 > i3 - 2; --v3)
              f[u3][v3] || (a[u3][v3] = B(r3[n2 >>> 3], 7 - (7 & n2)), ++n2);
            u3 += t2;
          }
        }
      }(Q(u2)), 0 > o) {
        var c2 = 1e9;
        for (v2 = 8; v2--; ) {
          w(v2), $(v2);
          var s2 = b();
          c2 > s2 && (c2 = s2, o = v2), w(v2);
        }
      }
      w(o), $(o), f = [];
    }, U = function(r2, n2, t2, o2, e2, a2) {
      if (void 0 === e2 && (e2 = 1), void 0 === a2 && (a2 = 40), void 0 === o2 && (o2 = -1), void 0 === t2 && (t2 = true), !(1 <= e2 && e2 <= a2 && a2 <= 40) || o2 < -1 || o2 > 7)
        throw "Invalid value";
      for (var f2 = [], i2 = 236, h2 = [], v2 = e2; ; ) {
        var c2 = x(r2, v2);
        if (c2 <= 8 * V(v2, n2))
          break;
        if (v2 >= a2)
          throw "Data too long";
        v2++;
      }
      if (t2)
        for (var s2 = (l2 = [m.H, m.Q, m.M]).length; s2--; )
          c2 <= 8 * V(v2, l2[s2]) && (n2 = l2[s2]);
      for (var l2 = 0; l2 < r2.length; l2++) {
        var g2 = r2[l2];
        A(g2.modeBits, 4, f2), A(g2.numChars, M(g2, v2), f2);
        for (var d2 = 0, p2 = g2.bitData; d2 < p2.length; d2++)
          f2.push(p2[d2]);
      }
      if (f2.length != c2)
        throw "Assertion error";
      var C2 = 8 * V(v2, n2);
      if (f2.length > C2)
        throw "Assertion error";
      if (A(0, u(4, C2 - f2.length), f2), A(0, (8 - f2.length % 8) % 8, f2), f2.length % 8 != 0)
        throw "Assertion error";
      for (; f2.length < C2; )
        A(i2, 8, f2), i2 ^= 253;
      for (s2 = f2.length; s2--; )
        h2[s2 >>> 3] |= f2[s2] << 7 - (7 & s2);
      return N(v2, n2, h2, o2);
    };
    return function() {
      function n2(r2) {
        return /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(r2);
      }
      function t2(r2, n3) {
        for (var t3 in r2 = document.createElementNS(s2, r2), n3 || {})
          r2.setAttribute(t3, n3[t3]);
        return r2;
      }
      var o2, f2, i2, u2, v2, c2, s2 = "http://www.w3.org/2000/svg", l2 = "", g2 = "string" == typeof r ? { msg: r } : r || {}, d2 = g2.pal || ["#000"], p2 = h(g2.dim) || 256, C2 = [1, 0, 0, 1, c2 = (c2 = h(g2.pad)) > -1 ? c2 : 4, c2], w2 = n2(w2 = d2[0]) ? w2 : "#000", b2 = n2(b2 = d2[1]) ? b2 : 0, A2 = g2.vrb ? 0 : 1;
      for (L(g2.msg || "", m[g2.ecl] || m.M, 0 == g2.ecb ? 0 : 1, g2.mtx), v2 = e + 2 * c2, i2 = e; i2--; )
        for (u2 = 0, f2 = e; f2--; )
          a[i2][f2] && (A2 ? (u2++, a[i2][f2 - 1] || (l2 += "M" + f2 + "," + i2 + "h" + u2 + "v1h-" + u2 + "v-1z", u2 = 0)) : l2 += "M" + f2 + "," + i2 + "h1v1h-1v-1z");
      return o2 = t2("svg", { viewBox: [0, 0, v2, v2].join(" "), width: p2, height: p2, fill: w2, "shape-rendering": "crispEdges", xmlns: s2, version: "1.1" }), b2 && o2.appendChild(t2("path", { fill: b2, d: "M0,0V" + v2 + "H" + v2 + "V0H0Z" })), o2.appendChild(t2("path", { transform: "matrix(" + C2 + ")", d: l2 })), o2;
    }();
  }
  var qrcode_default = QRCode;

  // src/qr/index.ts
  function createQRSlideshow(data, dim) {
    const chunks = chunkString(data, { maxLength: 256 });
    console.log(chunks);
    const slides = [];
    for (const chunk of chunks) {
      const slide = qrcode_default({ msg: JSON.stringify(chunk), dim });
      slide.style.display = "none";
      slide.dataset.index = chunk.index.toString();
      slide.dataset.total = chunk.total.toString();
      slides.push(slide);
    }
    return slides;
  }
  function startSlideshow(slides, mspfInput2) {
    slides[0].style.display = "";
    let i = 0;
    const n = slides.length;
    function changeFrame() {
      slides[i].style.display = "none";
      i = (i + 1) % n;
      slides[i].style.display = "";
      setTimeout(changeFrame, parseInt(mspfInput2.value));
    }
    setTimeout(changeFrame, parseInt(mspfInput2.value));
  }
  function chunkString(data, options) {
    const slices = [];
    for (let i = 0; i < data.length; i += options.maxLength)
      slices.push(data.slice(i, i + options.maxLength));
    return slices.map((slice, index) => ({
      data: slice,
      index,
      total: slices.length
    }));
  }

  // src/website.ts
  var container = document.getElementById("slideshow");
  var input = document.getElementById("input");
  var mspfInput = document.getElementById("msPerFrame");
  input.addEventListener("change", async () => {
    const slides = createQRSlideshow(input.value, container.offsetWidth);
    container.innerHTML = "";
    container.append(...slides);
    startSlideshow(slides, mspfInput);
  });
})();
//# sourceMappingURL=website.js.map
