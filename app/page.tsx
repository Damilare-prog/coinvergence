"use client";

import { useEffect } from "react";

const htmlBase64 = "4oCLPCFET0NUWVBFIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9IlVURi04Ij48bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI+PHRpdGxlPkNvaW52ZXJnZW5jZSDigJQgRGlnaXRhbCBBc3NldCBNYXJrZXRwbGFjZTwvdGl0bGU+PGxpbmsgaHJlZj0iaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwO5kwMCZhbXA7ZmFtaWx5PVNwYWNlK0dyb3Rlc2s6d2dodEA0MDA7NTAwOzYwMDs3MDAmYW1wO2Rpc3BsYXk9c3dhcCIgcmVsPSJzdHlsZXNoZWV0Ij48c2NyaXB0IHNyYz0iaHR0cHM6Ly9jZG4udGFpbHdpbmRjc3MuY29tIj48L3NjcmlwdD48c2NyaXB0IHNyYz0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZ3NhcC8zLjEyLjIvZ3NhcC5taW4uanMiPjwvc2NyaXB0PjxzY3JpcHQgc3JjPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9nc2FwLzMuMTIuMi9TY3JvbGxUcmlnZ2VyLm1pbi5qcyI+PC9zY3JpcHQ+PHN0eWxlPip7bWFyZ2luOjA7cGFkZGluZzowO2JveC1zaXppbmc6Ym9yZGVyLWJveH1odG1se3Njcm9sbC1iZWhhdmlvcjpzbW9vdGh9Ym9keXtmb250LWZhbWlseTonSW50ZXInLHNhbnMtc2VyaWY7YmFja2dyb3VuZDojMDIwNjE3O2NvbG9yOiNmOGZhZmM7b3ZlcmZsb3cteDpoaWRkZW59Ojotd2Via2l0LXNjcm9sbGJhcnt3aWR0aDo4cHh9Ojotd2Via2l0LXNjcm9sbGJhci10cmFja3tiYWNrZ3JvdW5kOiMwZjE3MmF9Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYntiYWNrZ3JvdW5kOiMzMzQxNTU7Ym9yZGVyLXJhZGl1czo0cHh9Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlcntiYWNrZ3JvdW5kOiM0NzU1Njl9Lmhlcm8tYmd7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVufS5oZXJvLWJnOjpiZWZvcmV7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTUwJTtsZWZ0Oi01MCU7d2lkdGg6MjAwJTtoZWlnaHQ6MjAwJTtiYWNrZ3JvdW5kOnJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMjAlIDUwJSxyZ2JhKDE0LDE2NSwyMzMsMC4xNSkgMCUsdHJhbnNwYXJlbnQgNTAlKSxyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDgwJSAyMCUscmdiYSgyMTcsNzAsMjM5LDAuMSkgMCUsdHJhbnNwYXJlbnQgNTAlKSxyYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDQwJSA4MCUscmdiYSgxNCwxNjUsMjMzLDAuMDgpIDAlLHRyYW5zcGFyZW50IDUwJSk7YW5pbWF0aW9uOmJnRmxvYXQgMjBzIGVhc2UtaW4tb3V0IGluZmluaXRlfUBrZXlmcmFtZXMgYmdGbG9hdHswJSwxMDAle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwwKSByb3RhdGUoMGRlZyk7MzMle3RyYW5zZm9ybTp0cmFuc2xhdGUoMzBweCwtMzBweCkgcm90YXRlKDFkZWcpOzY2JXt0cmFuc2Zvcm06dHJhbnNsYXRlKC0yMHB4LDIwcHgpIHJvdGF0ZSgtMWRlZyl9fS5ncmlkLXBhdHRlcm57YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgxNDgsMTYzLDE4NCwwLjAzKSAxcHgsdHJhbnNwYXJlbnQgMXB4KSxsaW5lYXItZ3JhZGllbnQoOTBkZWcscmdiYSgxNDgsMTYzLDE4NCwwLjAzKSAxcHgsdHJhbnNwYXJlbnQgMXB4KTtiYWNrZ3JvdW5kLXNpemU6NjBweCA2MHB4fS5nbGFzc3tiYWNrZ3JvdW5kOnJnYmEoMTUsMjMsNDIsMC42KTtiYWNrZHJvcC1maWx0ZXI6Ymx1cigyMHB4KTstd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpibHVyKDIwcHgpO2JvcmRlcjoxcHggc29saWQgcmdiYSgxNDgsMTYzLDE4NCwwLjEpfS5nbGFzcy1zdHJvbmd7YmFja2dyb3VuZDpyZ2JhKDE1LDIzLDQyLDAuOCk7YmFja2Ryb3AtZmlsdGVyOmJsdXIoMzBweCk7LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6Ymx1cigzMHB4KTtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMTQ4LDE2MywxODQsMC4xNSl9Lmdsb3ctYnJhbmR7Ym94LXNoYWRvdzowIDAgNDBweCByZ2JhKDE0LDE2NSwyMzMsMC4zKSwwIDAgODBweCByZ2JhKDE0LDE2NSwyMzMsMC4xKX0uZ2xvdy1hY2NlbnR7Ym94LXNoYWRvdzowIDAgNDBweCByZ2JhKDIxNyw3MCwyMzksMC4zKSwwIDAgODBweCByZ2JhKDIxNyw3MCwyMzksMC4xKX0uZ3JhZGllbnQtdGV4dHtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzBlYTVlOSAwJSwjZDk0NmVmIDUwJSwjMGVhNWU5IDEwMCUpO2JhY2tncm91bmQtc2l6ZToyMDAlIGF1dG87LXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6dGV4dDstd2Via2l0LXRleHQtZmlsbC1jb2xvcjp0cmFuc3BhcmVudDtiYWNrZ3JvdW5kLWNsaXA6dGV4dDthbmltYXRpb246Z3JhZGllbnRTaGlmdCA1cyBlYXNlIGluZmluaXRlfUBrZXlmcmFtZXMgZ3JhZGllbnRTaGlmdHswJSwxMDAle2JhY2tncm91bmQtcG9zaXRpb246MCUgY2VudGVyfTUwJXtCYWNrZ3JvdW5kLXBvc2l0aW9uOjEwMCUgY2VudGVyfX0uZmxvYXR7YW5pbWF0aW9uOmZsb2F0IDZzIGVhc2UtaW4tb3V0IGluZmluaXRlfS5mbG9hdC1kZWxheXthbmltYXRpb246ZmxvYXQgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7YW5pbWF0aW9uLWRlbGF5OjJzfS5mbG9hdC1kZWxheS0ye2FuaW1hdGlvbjpmbG9hdCA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTthbmltYXRpb24tZGVsYXk6NHN9QGtleWZyYW1lcyBmbG9hdHswJSwxMDAle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDBweCl9NTAle3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0yMHB4KX19LmNhcmQtaG92ZXJ7dHJhbnNpdGlvbjphbGwgMC40cyBjdWJpYy1iZXppZXIoMC40LDAsMC4yLDEpfS5jYXJkLWhvdmVyOmhvdmVye3RyYW5zZm9ybTp0cmFuc2xhdGVZKC04cHgpO2JveC1zaGFkb3c6MCAyMHB4IDQwcHggcmdiYSgwLDAsMCwwLjQpLDAgMCA2MHB4IHJnYmEoMTQsMTY1LDIzMywwLjE1KTtib3JkZXItY29sb3I6cmdiYSgxNCwxNjUsMjMzLDAuMyl9LmJ0bi1wcmltYXJ5e2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEzNWRlZywjMGVhNWU5IDAlLCMwMjg0YzcgMTAwJSk7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVuO3RyYW5zaXRpb246YWxsIDAuM3MgZWFzZX0uYnRuLXByaW1hcnk6OmJlZm9yZXtjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6LTEwMCU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg5MGRlZyx0cmFuc3BhcmVudCxyZ2JhKDI1NSwyNTUsMjU1LDAuMiksdHJhbnNwYXJlbnQpO3RyYW5zaXRpb246bGVmdCAwLjVzIGVhc2V9LmJ0bi1wcmltYXJ5OmhvdmVyOjpiZWZvcmV7bGVmdDoxMDAlfS5idG4tcHJpbWFyeTpob3Zlcnt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMnB4KTtib3gtc2hhZG93OjAgMTBweCAzMHB4IHJnYmEoMTQsMTY1LDIzMywwLjQpfS5idG4tc2Vjb25kYXJ5e2JvcmRlcjoxcHggc29saWQgcmdiYSgxNDgsMTYzLDE4NCwwLjMpO3RyYW5zaXRpb246YWxsIDAuM3MgZWFzZX0uYnRuLXNlY29uZGFyeTpob3Zlcntib3JkZXItY29sb3I6cmdiYSgxNCwxNjUsMjMzLDAuNSk7YmFja2dyb3VuZDpyZ2JhKDE0LDE2NSwyMzMsMC4xKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMnB4KX0ubWFycXVlZS1jb250YWluZXJ7b3ZlcmZsb3c6aGlkZGVuO21hc2staW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHRyYW5zcGFyZW50LGJsYWNrIDEwJSxibGFjayA5MCUsdHJhbnNwYXJlbnQpOy13ZWJraXQtbWFzay1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsdHJhbnNwYXJlbnQsYmxhY2sgMTAlLGJsYWNrIDkwJSx0cmFuc3BhcmVudCl9Lm1hcnF1ZWUtdHJhY2t7ZGlzcGxheTpmbGV4O2FuaW1hdGlvbjptYXJxdWVlIDMwcwpsaW5lYXIgaW5maW5pdGV9Lm1hcnF1ZWUtdHJhY2s6aG92ZXJ7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkfUBrZXlmcmFtZXMgbWFycXVlZXswJXt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKX0xMDAle3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpfX0udGlja2VyLWl0ZW17dHJhbnNpdGlvbjphbGwgMC4zcyBlYXNlfS50aWNrZXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kOnJnYmEoMTQsMTY1LDIzMywwLjEpO3RyYW5zZm9ybTpzY2FsZSgxLjAyKX0udGFiLWFjdGl2ZXtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcscmdiYSgxNCwxNjUsMjMzLDAuMikpLHJnYmEoMjE3LDcwLDIzOSwwLjEpKTtib3JkZXItY29sb3I6cmdiYSgxNCwxNjUsMjMzLDAuNSk7Y29sb3I6IzBlYTVlOX0ucHVsc2UtZG90e3Bvc2l0aW9uOnJlbGF0aXZlfS5wdWxzZS1kb3Q6OmFmdGVye2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kOmluaGVyaXQ7YW5pbWF0aW9uOnB1bHNlIDJzIGVhc2Utb3V0IGluZmluaXRlO29wYWNpdHk6MC41fUBrZXlmcmFtZXMgcHVsc2V7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKDEpO29wYWNpdHk6MC41fTEwMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKDIuNSk7b3BhY2l0eTowfX0ubmF2LWxpbmt7cG9zaXRpb246cmVsYXRpdmV9Lm5hdi1saW5rOjphZnRlcntjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTotNHB4O2xlZnQ6MDt3aWR0aDowO2hlaWdodDoycHg7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoOTBkZWcsIzBlYTVlOSwjZDk0NmVmKTt0cmFuc2l0aW9uOndpZHRoIDAuM3MgZWFzZX0ubmF2LWxpbms6aG92ZXI6OmFmdGVye3dpZHRoOjEwMCV9LnJldmVhbHtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMzBweCl9LnJldmVhbC5hY3RpdmV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApO3RyYW5zaXRpb246YWxsIDAuOHMgY3ViaWMtYmV6aWVyKDAuNCwwLDAuMiwxKX0uc3RhZ2dlci1jaGlsZHJlbj4qe29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWSgyMHB4KX0uc3RhZ2dlci1jaGlsZHJlbi5hY3RpdmU+KjpudGgtY2hpbGQoMSl7dHJhbnNpdGlvbi1kZWxheTowLjFzfS5zdGFnZ2VyLWNoaWxkcmVuLmFjdGl2ZSo6bnRoLWNoaWxkKDIpe3RyYW5zaXRpb24tZGVsYXk6MC4yc30uc3RhZ2dlci1jaGlsZHJlbi5hY3RpdmU+KjpudGgtY2hpbGQoMyl7dHJhbnNpdGlvbi1kZWxheTowLjNzfS5zdGFnZ2VyLWNoaWxkcmVuLmFjdGl2ZSo6bnRoLWNoaWxkKDQpe3RyYW5zaXRpb24tZGVsYXk6MC40c30uc3RhZ2dlci1jaGlsZHJlbi5hY3RpdmU+KjpudGgtY2hpbGQoNSl7dHJhbnNpdGlvbi1kZWxheTowLjVzfS5zdGFnZ2VyLWNoaWxkcmVuLmFjdGl2ZSo6bnRoLWNoaWxkKDYpe3RyYW5zaXRpb24tZGVsYXk6MC42c30uc3RhZ2dlci1jaGlsZHJlbi5hY3RpdmU+KntvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNpdGlvbjphbGwgMC42cyBjdWJpYy1iZXppZXIoMC40LDAsMC4yLDEpfS50cmFkaW5nLWNhcmR7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLHJnYmEoMTUsMjMsNDIsMC45KSxyZ2JhKDMwLDQxLDU5LDAuOCkpO2JvcmRlcjoxcHggc29saWQgcmdiYSgxNDgsMTYzLDE4NCwwLjEpfS5wcmljZS10YWd7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHJnYmEoMTQsMTY1LDIzMywwLjIpLHJnYmEoMjE3LDcwLDIzOSwwLjEpKTtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMTQsMTY1LDIzMywwLjMpfS5zdGF0dXMtdmVyaWZpZWR7YmFja2dyb3VuZDpyZ2JhKDM0LDE5Nyw5NCwwLjE1KTtjb2xvcjojMjJjNTU1ZTtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMzQsMTk3LDk0LDAuMyl9LnN0YXR1cy1lc2Nyb3d7YmFja2dyb3VuZDpyZ2JhKDE0LDE2NSwyMzMsMC4xNSk7Y29sb3I6IzBlYTVlOTtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMTQsMTY1LDIzMywwLjMpfS5mZWF0dXJlLWljb257YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHJnYmEoMTQsMTY1LDIzMywwLjIpLHJnYmEoMjE3LDcwLDIzOSwwLjEpKTtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMTQsMTY1LDIzMywwLjIpfS50ZXN0aW1vbmlhbC1jYXJke2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE0NWRlZyxyZ2JhKDE1LDIzLDQyLDAuOCkscmdiYSgzMCw0MSw1OSwwLjYpKX0uZG9tYWluLWNhcmR7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLHJnYmEoMTUsMjMsNDIsMC45KSxyZ2JhKDMwLDQxLDU5LDAuNykpO3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbn0uZG9tYWluLWNhcmQ6OmJlZm9yZXtjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2hlaWdodDozcHg7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoOTBkZWcsIzBlYTVlOSwjZDk0NmVmKTt0cmFuc2Zvcm06c2NhbGVYKDApO3RyYW5zaXRpb246dHJhbnNmb3JtIDAuM3MgZWFzZX0uZG9tYWluLWNhcmQ6aG92ZXI6OmJlZm9yZXt0cmFuc2Zvcm06c2NhbGVYKDEpfS5zZXJ2aWNlLWNhcmR7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLHJnYmEoMTUsMjMsNDIsMC44KSxyZ2JhKDMwLDQxLDU5LDAuNSkpO2JvcmRlcjoxcHggc29saWQgcmdiYSgxNDgsMTYzLDE4NCwwLjEpO3RyYW5zaXRpb246YWxsIDAuNHMgZWFzZX0uc2VydmljZS1jYXJkOmhvdmVye2JvcmRlci1jb2xvcjpyZ2JhKDE0LDE2NSwyMzMsMC4zKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNHB4KTtib3gtc2hhZG93OjAgMjBweCA0MHB4IHJnYmEoMCwwLDAsMC4zKX0udHJ1c3QtYmFkZ2V7YmFja2dyb3VuZDpyZ2JhKDM0LDE5Nyw5NCwwLjEpO2JvcmRlcjoxcHggc29saWQgcmdiYSgzNCwxOTcsOTQsMC4yKX0ubGl2ZS1pbmRpY2F0b3J7YW5pbWF0aW9uOmxpdmVQdWxzZSAycyBlYXNlLWluLW91dCBpbmZpbml0ZX1Aa2V5ZnJhbWVzIGxpdmVQdWxzZXswJSwxMDAle29wYWNpdHk6MX0NTAle29wYWNpdHk6MC41fX0ubW9iaWxlLW1lbnV7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTAwJSk7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMC4zcyBlYXNlfS5tb2JpbGUtbWVudS5hY3RpdmV7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCl9Lm1vZGFsLW92ZXJsYXl7b3BhY2l0eTowO3Zpc2liaWxpdHk6aGlkZGVuO3RyYW5zaXRpb246YWxsIDAuM3MgZWFzZX0ubW9kYWwtb3ZlcmxheS5hY3RpdmV7b3BhY2l0eToxO3Zpc2liaWxpdHk6dmlzaWJsZX0ubW9kYWwtY29udGVudHt0cmFuc2Zvcm06c2NhbGUoMC45KSB0cmFuc2xhdGVZKMjBweCk7dHJhbnNpdGlvbjphbGwgMC4zcyBlYXNlfS5tb2RhbC1vdmVybGF5LmFjdGl2ZSAubW9kYWwtY29udGVudHt0cmFuc2Zvcm06c2NhbGUoMSkgdHJhbnNsYXRlWSgwKX0udG9hc3R7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTIwJSk7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMC40cyBjdWJpYy1iZXppZXIoMC40LDAsMC4yLDEpfS50b2FzdC5zaG93e3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApfSNwYXJ0aWNsZUNhbnZhc3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwb2ludGVyLWV2ZW50czpub25lfS53aGF0c2FwcC1idG57YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCMyNUQzNjYsIzEyOEM3RSk7dHJhbnNpdGlvbjphbGwgMC4zcyBlYXNlfS53aGF0c2FwcC1idG46aG92ZXJ7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTJweCk7Ym94LXNoYWRvdzowIDEwcHggMzBweCByZ2JhKDM3LDIxMSwxMDIsMC40KX0uYnliaXQtYmFkZ2V7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCNGN0E2MDAsI0ZGOTkwMCk7Y29sb3I6IzAwMDtmb250LXdlaWdodDo3MDB9QG1lZGlhKG1heC13aWR0aDo2NDBweCl7Lmhlcm8tdGl0bGV7Zm9udC1zaXplOjIuNXJlbSFpbXBvcnRhbnQ7bGluZS1oZWlnaHQ6MS4xIWltcG9ydGFudH19PC9zdHlsZT48YmFzZSB0YXJnZXQ9Il9ibGFuayI+PC9oZWFkPjxib2R5IGNsYXNzPSJiZy1kYXJrLTk1MCB0ZXh0LWRhcmstNTAiPg=="
function getHTML(): string {
  const binary = atob(htmlBase64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
}

export default function Home() {
  useEffect(() => {
    const init = () => {
      // Mobile menu
      const mobileMenuBtn = document.getElementById("mobileMenuBtn");
      const mobileMenu = document.getElementById("mobileMenu");
      const closeMobileMenuBtn = document.getElementById("closeMobileMenu");

      mobileMenuBtn?.addEventListener("click", () => mobileMenu?.classList.add("active"));
      closeMobileMenuBtn?.addEventListener("click", () => mobileMenu?.classList.remove("active"));
      mobileMenu?.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => mobileMenu?.classList.remove("active"));
      });

      // Navbar scroll
      const navbar = document.getElementById("navbar");
      if (navbar) {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 50) navbar.classList.add("glass");
          else navbar.classList.remove("glass");
        });
      }

      // Counter animation
      document.querySelectorAll(".counter-value").forEach((counter) => {
        const target = parseInt((counter as HTMLElement).dataset.target || "0");
        const step = target / (2000 / 16);
        let current = 0;
        const update = () => {
          current += step;
          if (current < target) {
            counter.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(update);
          } else {
            counter.textContent = target.toLocaleString();
          }
        };
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) { update(); observer.disconnect(); }
        });
        observer.observe(counter);
      });

      // Reveal animations
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("active"); });
      }, { threshold: 0.1 });
      document.querySelectorAll(".reveal, .stagger-children").forEach((el) => revealObserver.observe(el));

      // Particle canvas
      const canvas = document.getElementById("particleCanvas") as HTMLCanvasElement;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
          resize(); window.addEventListener("resize", resize);
          const particles = Array.from({ length: 50 }, () => ({
            x: Math.random() * canvas.width, y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1, opacity: Math.random() * 0.5 + 0.2,
          }));
          const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
              p.x += p.vx; p.y += p.vy;
              if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
              if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
              ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
              ctx.fillStyle = "rgba(14, 165, 233, " + p.opacity + ")"; ctx.fill();
            });
            for (let i = 0; i < particles.length; i++) {
              for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                  ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
                  ctx.strokeStyle = "rgba(14, 165, 233, " + (0.1 * (1 - dist / 100)) + ")"; ctx.lineWidth = 0.5; ctx.stroke();
                }
              }
            }
            requestAnimationFrame(animate);
          };
          animate();
        }
      }

      // GSAP
      if ((window as any).gsap && (window as any).ScrollTrigger) {
        const gsap = (window as any).gsap;
        gsap.registerPlugin((window as any).ScrollTrigger);
        gsap.from(".hero-title", { opacity: 0, y: 50, duration: 1, ease: "power3.out", delay: 0.2 });
        gsap.from(".float", { opacity: 0, scale: 0.8, duration: 1, ease: "power3.out", delay: 0.5 });
      }

      // Keyboard shortcuts
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          const overlay = document.getElementById("modalOverlay");
          overlay?.classList.remove("active");
        }
      });
    };

    setTimeout(init, 100);
    return () => {};
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: getHTML() }}
      suppressHydrationWarning
    />
  );
}
