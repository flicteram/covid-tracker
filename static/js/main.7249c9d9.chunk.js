(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{194:function(e,t,A){},196:function(e,t,A){},197:function(e,t,A){},198:function(e,t,A){},199:function(e,t,A){},200:function(e,t,A){},201:function(e,t,A){},209:function(e,t,A){},213:function(e,t,A){},214:function(e,t,A){},215:function(e,t,A){},216:function(e,t,A){},217:function(e,t,A){},218:function(e,t,A){},219:function(e,t,A){},220:function(e,t,A){},235:function(e,t,A){"use strict";A.r(t);var c=A(1),a=A(23),s=A.n(a),n=(A(88),A(8)),r=A(27),i=(A(194),A(0));var o=function(e){var t=e.cases,A=e.deaths,c={labels:e.label,datasets:[{label:"Cases",data:t,backgroundColor:"black",borderColor:"black",fill:!1,pointRadius:0,pointHoverRadius:5},{label:"Deaths",data:A,backgroundColor:"red",borderColor:"red",fill:!1,pointRadius:0,pointHoverRadius:5}]};return Object(i.jsxs)("div",{className:"chartAll",children:[Object(i.jsx)("h2",{className:"last30days",children:"Last 30 days"}),Object(i.jsx)("div",{className:"chartContainer",children:Object(i.jsx)(r.a,{data:c,options:{responsive:!0,maintainAspectRatio:!1,plugins:{tooltip:{mode:"index",intersect:!1},legend:{labels:{usePointStyle:!0,pointStyle:"circle"},position:"top"}}}})})]})};A(196);var l=function(e){var t=e.totalCases,A=e.todayCases,c=e.perOneMillion,a=e.tests;return Object(i.jsxs)("div",{className:"totalContainer",children:[Object(i.jsxs)("div",{className:"total",children:[Object(i.jsx)("h2",{className:"totalTitle",children:"Total cases"}),Object(i.jsx)("img",{className:"globe",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAABI4AAASOAH6MNVmAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAtlQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgggz1wAAAPJ0Uk5TAAECAwQFBgcICQoLDA0ODxARExQVFhcYGRobHB0eHyAhIiMkJSYnKCkrLC0uLzAxMjM0Njc4OTo7PD0/QUJDREVGR0hJSktMTU5PUFFTVFVWV1hZWltcXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp8fX5/gIKDhIWHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6goaKjpKWnqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f7shZ7IAAAFeklEQVQYGZXBjUOUhQHH8d/dSSCiGAK6UUIue9F0zpWt3CpTjCg3LV2it1EEc8qmOSxLmRlGbWNpM4uc2nTemI1THGMstBcRrRU6BYMIQ4tE5B2+f8GO4+Se57kHq89HGkLEnFX5O8tOXmw99Z/dBU+mjtA38u30okuYdOxfNkFfk+uRSvy6Go+XvvGX8pMtDPjQPUxfzbnoBD7NRdnTnAqIvGmZtx2f00uG6cocD30EdO2a6ZRF5Nw/dQCn0hy6gphi4NO142TrWy+0Ad4xGtL3P4buTXPTrleAQ2ZjN7VB/QwNIbMTDk19opXq5JyHDpxK+V1tV1mqUyY3HoOuFbLjfA3oLnvp7l8eIffe8WvLx3DMc44CmUX8EdgRplCb8Tn//EH2FrR4C5uhcpnCf8+nt8tiXjN4wmS1jn5NO+vxeyf9fz/R6J0d5bOHy2JaHfCaLH6BX+tTxfg0pjkUcVv9v2aHx8rqZaAPHpdJah9GC+SzHDasekxG16VLGd3wTDOdt8kg5jNMjt03XpF/wKdABtFZX0ZJ7nUHEt1QH6ug1wn6Zxo+3klt+D2tQc7jJRs3h6Xnb3uzsAY4qEHJGJw9gM+JCmjfdKGuyq1B4ZnxtYd/xaB5Coiqo62OoL+lebvwqf3p2PHH3TK69WgXg6pdGrACjvQStHlJTtlReC/pWnfMdzNlNKcd+OLVc/j9XH6uWj7vweDm6he25ONJmjvhezJy5Ly+trPpHXdz0g2noO8LPhmufj+m5xBGtQ3zPq+bpxA3Ad13SBP2r17O+vZsyFa/ClpaseiZr1BRwJOSnD97OfF9Z20DHJPPNPBg9Q/ZuT1zSfZ277tJ3xmpUboxywvXS/oNLFp2AZNdcbJx32n8pkvOhKulH8JqSSV0RasqA4Nfy5aXAX1VeY/QOCfxuou8J4W3USJVPdiDT/crt06ZMr/XITtxJwg1TjMhS3qxbCM+D8sn6rkI2Zh9FqsumKWnYLo0uunhKjju0JCe68POCm2FcZLiRq+H5yXXXbJXiK2tKqLbqX6ZcOKWqYd2yd4MbB3SYerl53ixtr0ettwlW7uwdUY1HNZl8UmVvTTJ1h5sNauVPTIY+36XpNVv50qxMvottnrUwm4ZXdOQOz+rDw6WXvqBDFxvYqdV1VTIJO6ODAb8N3Gcgka8i89H9ZicVilnZBHFoFQFxRfkPDZfI3ML+wiq0HY6ZeZcxaC/KtRIDPZqI8TI5AmCPpyoEBMx2KLlMFkmeRi99efChTKJ+ZKgtUqBR2XiweLi3DAZrSTofo1op1gmyb1Y3Syj8Bou642V/k7nKJmsweINmS3ksv2S3LBAJg4vJp9EySyXyxZJiu1lh8yST2JULLO4VgJaIuVTzoVomYU920fQVplN5rJt6pcBG2RVRNDTssgjYKb6XVVDW4IsPAT09n2QJIsHGFDrkN9C2CYLDwEPOpyyeoABazTAUUnvJJl5CJiiULEN9DszXAGzoNQlEw8BS2XjfvqlalAJ5MtkFgNOjpKNqfjsU1BCI7hllILfpcmyM/YgnL9WBjM66LxTBhn4ZcvWPW303C2TxdA0QUERR4GzK8Nk5952WCmLPGi6U0HPQOYw2UrugO2ycnmg061BL8E+2UrphFddCuHKA/JdClgPudcoVGReDxQ4ZGdxB5RO0oDR5yBVIebUQt96DWFGI/RuS5CfG26RRfxO4LPZGlJCCdC2IVr9lnY1TZRR0ppmwBuvK5lVCVzYsWCUpMTpURo05vG38Pl4sUNX5lhYg09n8aOTYzRg+A33pO/rxud8dri+2lUZ5b34dZ6p2L33yDkC3s6K1tcUu7SoHZOeqnUT9Y2MSFm+cXtpdUt7wwf/3pPzoygN4f+16Y351dSVygAAAABJRU5ErkJggg=="})]}),Object(i.jsxs)("p",{className:"confirmed",children:[Object(i.jsx)("span",{className:"confirmedTotal",children:t.toLocaleString()}),Object(i.jsxs)("span",{className:0!==A?"todayConfirmed":"todayConfirmedNone",children:["+",A.toLocaleString()]})]}),Object(i.jsxs)("p",{children:[Object(i.jsxs)("span",{className:"perMilion",children:[c.toLocaleString()," per million"]}),Object(i.jsx)("span",{className:"point",children:"\u2022"}),Object(i.jsxs)("span",{className:"tested",children:[a.toLocaleString()," tested"]})]})]})};A(197);var d=function(e){var t=e.activeTotal,A=e.critical,c=e.activeYesterday,a=t-c>0?"+".concat((t-c).toLocaleString()):(t-c).toLocaleString();return Object(i.jsxs)("div",{className:"activeContainer",children:[Object(i.jsxs)("div",{className:"active",children:[Object(i.jsx)("h2",{className:"activeTitle",children:"Active cases"}),Object(i.jsx)("img",{className:"mask",alt:"Man with mask",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALVSURBVFiF5dddaJZlGAfw3+bXXNrQ5URydGCgpB0ISYjBlPJj4scGnaigKZXioXYguLMddCC4AyUiJxQddBCCoayPIVodiC6KqIRsqOVXkTl15rQ56+B6Bu+e9r68z9OGSH944bmv++O67vv+X//rfvm/oyLnnGcxH7WYgB6cQ1fyPSqYjj24irs4hSP4EMdxEQ/wObbg8ZFyXIkW/InP0IjqImPr8Qa+w+9Y9l+dT8FRnMcLGee+jpuYltd5HX7AJ+Ku86ALm0sNGFvEXoUOXMJq9OcM4B7G5JnYhq8xOadjaMJtzMw6cRb6RJplQXPi8Et8hV68mdU5tOPdHPMacAuvYh024LqM/KnAZfnSZ4FgfSE6sTfLIk/hb0HCrGgUWVOIF/GHEkSsTLUn4o5QumKYJ8RmraFSvhjfpsZ+ITbzTIn1hqAeA4or3XpBtMNCkg8m9seSdvMwc7qxvNwA4JrhVa9WyPGapD0TN8TO94q0TZ8oUSNeyhLAgeSXxkr8lLLtx4/iVOam+qbibVGgPsK4cgOYa3gdWC2OM23rF6rZiPGiCu4WZbkDS0RmfVpuAETZPWnokQ5ewcICWwVW4S3BgV5xLV1JQCtwBj8LcpfNhUn4BVtT9nZcQI3YaV1BX6XgQasQpRNCmFpEJuwSb4WysS6JfDDVVor0/B4b8Q72FYyvFfddL3J/n6Eq+KS4rrLrS1Wyg+cEoa6LGj+IniTAOUm7Ab8m3x9gxjBr9mF2oaFYOSZ2+43Q9l6cFbsmTqUah3Aar+EvkcLE6aVRnWzqTgmf/8IJweD72J7q60psTYJ4H4uXUzGsEQ/XTLiEpUKi0y/ol0XxeUVIbbfgQE2RtY7JUZ63idwuhvWCcJ2CAxeFNqSxA78JLo04nhCK148rgpg78bSQ6ffESS0aDeeDaBP/E1pFJgyIst6D95NgRg2TRJY8P5pOSmE8Nj0s548+/gE1PaCStjB5hwAAAABJRU5ErkJggg=="})]}),Object(i.jsxs)("p",{className:"activeP",children:[Object(i.jsx)("span",{className:"activeToday",children:t.toLocaleString()}),Object(i.jsx)("span",{className:t-c===0?"activeTodayYesterdayNone":t-c>0?"activeTodayYesterday":"activeTodayYesterdayGood",children:a})]}),Object(i.jsxs)("p",{className:"critical",children:[A.toLocaleString()," in critical condition"]})]})};A(198);var j=function(e){var t=e.recovered,A=e.todayRecovered,c=e.recoveredPercentage;return Object(i.jsxs)("div",{className:"recoveredContainer",children:[Object(i.jsxs)("div",{className:"recovered",children:[Object(i.jsx)("h2",{className:"recoveredTitle",children:"Recovered"}),Object(i.jsx)("img",{className:"recoveredImg",alt:"heart image",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3QAAAN0BcFOiBwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAReSURBVFiFxZZLaFxVGMd/59x753HnkUwSTCcJCLUri4siglsXglDoRi1024rFR5ukE60UpRRFWvNqGh8EpF26UDdZWSy4lYqLItpNDRRqJqZNJ81kZnLnPo6LyZ25dzLTTNIUv83M/d///f5/zvnO+T6hlOL/DL3di0uFj7piG87LwEtA3FM4QvCPhN8LhdQf558/Xw3yL/x1IZLJFF/w4EWlGJQCHagAv23E9F/PZi4+aqUjmldg9s7pqJeIfKDgHBBv468IXEXzrgDgytPAcSDVhl8R8LksVcdPHbhitTUwnT/zmhByFsWBNomaw9v8lR2xBXeU8k6NZqd+2mJgOj/2qYCPg3zHdrA2qtiWg5QCI2oQM6MIIVrmV0ph2zau4+Ipha5r6LqOpmlhHnw2mp34pG5gJp97XSF+8Al21WFlqcD66jr++hhRDcM00HRJPB4nkTDRDb1utFQqU6lUaFXU8XicVDoZMiJQbwxnJ38Uc+pto5xPLQBDAFWryr2/l3Adt06OJg2M2NZ6jZu1EqmUKy1XJBhSSnr7etD1ep57Zra4X5bzqaO+OAoWF/4NiWuGbCnuC3ciDuB5Hg9XCtBYoKFyPnVUAod95FGhiG07oQ8jCaMjgU7CdV3KlZDhw1LAIf+pXCyHPtAjGpreWYF3GpbVOIUCDkkFgz6gvDBZi+yteE0k9HdQCig1kHAFtztue+VAQEkCq0EkbOAp6IdjVSrETf8plUmE3j6NPhWLxxr5ETclqBs+kEwn0bTGvrtOU1E8YUgpicViAUTdkI4U1wELQEhBuqfRTzx7bw2YCTNYV5YjxXU51j++LOCaj3b1pup77znenm6DaTaaq4BrY/3jyxLAgYuADWBEDPqyPUCtXp0NZ2umXUQ6nQr2AntTs9ZGc9mJuyBm/bfdfV2kM7WtsCtO6OzuJkzTJJEMFriYrWkG+rhWss4Bt/zn/qE+4mYUz1PY1u5XIRqN0NWdDkK3NrUIGahNKu4xamMUCMg+249h6Njl3RnQdZ1MJhOEKuAeC05Fobt2JDt9G8UJNicdzdAYfC6L1CRWyd6RuJSSnt4MQtar3kNxYiQ7fTvI2zITAlxezB1HiG/ZvBsdx2Hp7n2U9NCj2hZ+c0QiEbozXcGiUyj11sjA5NVmbksDANNLY+8KxVdB7MHiQyzXQmrt7+hkMkEqHZ5NleC90X0TX7fitzUAMJPPnVSILwmM76W1Muuldbym1imlpLu7i2gsGoQdgXp/ODs5107jsQYAppZyr0glvgd6fcx1XQqFVexqrS6MiEEm0908fK54Qr15Zt/kL4/Lv60BgMvLZ/bjynngYB1UsLZWBGqXTFMn/RPNOzLyzNTCdrk7MgDwxYOzqYjtzgHHtqF+VzW0kx/2XSp2krdjA37MLOaOKCm+QTEQzsSi8NQ7wwOT8zvJt+OZa3hgcp4N9yCCxpESXGXDPbhTcdjFCgRjZnHs1ZqpiZ93m+OJDOxF/Aep4aUmCW4O1AAAAABJRU5ErkJggg=="})]}),Object(i.jsxs)("p",{className:"recoveredP",children:[Object(i.jsx)("span",{className:"recoveredTotal",children:t.toLocaleString()}),Object(i.jsxs)("span",{className:0!==A?"recoveredToday":"recoveredTodayNone",children:["+",A.toLocaleString()]})]}),Object(i.jsxs)("p",{className:"recoveredProcent",children:[c,"% recovered"]})]})},u=A(6),h=Object(c.createContext)();function b(e){var t=e.children,A=Object(c.useState)([]),a=Object(u.a)(A,2),s=a[0],n=a[1],r=Object(c.useState)([]),o=Object(u.a)(r,2),l=o[0],d=o[1],j=Object(c.useState)([]),b=Object(u.a)(j,2),O=b[0],m=b[1],g=Object(c.useState)([]),v=Object(u.a)(g,2),p=v[0],f=v[1],x=Object(c.useState)([]),C=Object(u.a)(x,2),N=C[0],y=C[1],S=Object(c.useState)(!0),L=Object(u.a)(S,2),B=L[0],P=L[1];return Object(c.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){return n(e)})),fetch("https://disease.sh/v3/covid-19/all?yesterday=true").then((function(e){return e.json()})).then((function(e){return d(e)})),fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=30").then((function(e){return e.json()})).then((function(e){return m(e),P(!1)})),fetch("https://disease.sh/v3/covid-19/continents").then((function(e){return e.json()})).then((function(e){return f(e)})),fetch("https://disease.sh/v3/covid-19/countries?sort=cases").then((function(e){return e.json()})).then((function(e){return y(e)})),fetch("https://covid-situations.herokuapp.com/v1/situations").then((function(e){return e.json()})).then((function(e){return console.log(e)}))}),[]),Object(i.jsx)(h.Provider,{value:{covid:s,covidYesterday:l,history:O,mostAffected:N,continents:p,isLoading:B},children:t})}A(199);var O=function(e){var t=e.deaths,A=e.todayDeaths,c=e.deathsPerOneMillion;return Object(i.jsxs)("div",{className:"deathContainer",children:[Object(i.jsxs)("div",{className:"death",children:[Object(i.jsx)("h2",{className:"deathTitle",children:"Deaths"}),Object(i.jsx)("img",{className:"deathImg",alt:"death image",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANUSURBVFiF7dZdiFVVFAfw33VmdExyanJsKrQPCqqJLEKDERPCMsoghT6gJ6WH0iKaMtEShNIeI6IXIQqkSMjIXlLLogIpKypSc8jSnKIo+oSCILKHtY73cDozt24jvfiHc+/Za6+vvc9e/7U5jv8ZHZXxTMzG9/h9nGP1YB7+wM91CstwCFswkomMF+akzy0ZY1lVoQvfoD/HC7F9HBPYnj5ljK/RqfjBICZmEvAlTq5x1MB83IRLMUN8qhG8js3YX2PXmzoyRjfm4g1Yjr24p2SwEm9jWknWjzPxEm7D+ZiCU3AZHsABPJ2yAtPS18qSbChj3gGHMb2ScQdW4Qssxs04iEk1qytjItZgGBdgSfpY5e8H/tScM4K+FE7P7LpzfCE+yZWd0yJ4GdeLk/5e+pDJD2kutk8s3p34CGuxTxyYPeLk9mSWF/2L4AXuxvP5Pjt97hBbvzZjriiU54ozUJTeAnyG9/FQG8FhQgbZJHZwQcrnZKzBVg5Owm84o80EYCk+wNR2jC/Brv8QnPjeB8dSmDDG3Lli6woMiO3cJkq3bHsansArWIfJKf9W7GRXOwlMxi/5fhZezmcdrst/OEGQ0AGsFqf72ZKfX7Uu31pcKUhHOl5TmuvBV/m+CM+V5hr4VNT5JNHYRsVYOzAsariRz5HS3J8V3SM144b4bMNjJdAKb4mdOFvwwY2iB2zF+tSZkkFW4GI8lvPEubi33eBTBSltE6uZJbb6NUEyHbgW54lS3Siay8OZ1OmCDTf5B2U4D/cLkqBJRBuwE/fV2MzC54LZqujEm2m3IX0VRDSY8qPUfhc+FPS4V9DlHk1WLFZylDYTDdEzuivyEwUF79ds9wUVvyoO6HpxPnqJZlS03aIZFWUzgN1i63fjyZrVltEnmtfjeCZtBnKuW7Tkohl1SpI6LEqmjHI7XpKyLvzUIoGr8WJpvNjo7bhffELLRRccKk3WXUjgx/zfKNjvQVyOW3FLJrC5YjPahWQfbi8E8/FDSWEA79Ss8JDonLvEheMp3CBIajUewaM1du9q3guKhVxRVugUF8XiUnqNKL8qrsLHmWz1+U5QdX+N3Y70SeVSWkZxLX/Bsb+WLx1NcaYgl95xDF6gVzSxGcfA93G0j78AaKi6WVHHtOYAAAAASUVORK5CYII="})]}),Object(i.jsxs)("p",{className:"deathP",children:[Object(i.jsx)("span",{className:"deathTotal",children:t.toLocaleString()}),Object(i.jsxs)("span",{className:0!==A?"deathToday":"deathTodayNone",children:["+",A.toLocaleString()]})]}),Object(i.jsxs)("p",{className:"deathPerMillion",children:[c.toLocaleString()," per million"]})]})};A(200);var m=function(e){var t=e.totalCases,A=e.todayCases,c=e.perOneMillion,a=e.tests,s=e.activeTotal,n=e.critical,r=e.activeYesterday,o=e.recovered,u=e.todayRecovered,h=e.recoveredPercentage,b=e.deaths,m=e.todayDeaths,g=e.deathsPerOneMillion;return Object(i.jsxs)("div",{className:"cardsContainer",children:[Object(i.jsx)(l,{totalCases:t,todayCases:A,perOneMillion:c,tests:a}),Object(i.jsx)(d,{activeTotal:s,critical:n,activeYesterday:r}),Object(i.jsx)(j,{recovered:o,todayRecovered:u,recoveredPercentage:h}),Object(i.jsx)(O,{deaths:b,todayDeaths:m,deathsPerOneMillion:g})]})},g=A(10);A(201);var v=function(){var e=Object(c.useContext)(h).continents.map((function(e,t){return Object(i.jsxs)(g.b,{to:"/regions/".concat(e.continent),className:"continentItem",children:[Object(i.jsx)("h2",{className:"continentTitle",children:e.continent}),Object(i.jsx)("h3",{className:"continentCases",children:"Cases"}),Object(i.jsxs)("p",{className:"continentTotalP",children:[Object(i.jsx)("span",{className:"continentTotal",children:e.cases.toLocaleString()}),Object(i.jsxs)("span",{className:0!==e.todayCases?"continentToday":"continentTodayNone",children:["+",e.todayCases.toLocaleString()]})]}),Object(i.jsxs)("p",{className:"continentActiveP",children:[Object(i.jsxs)("span",{className:"continentActive",children:[e.active.toLocaleString()," active"]}),Object(i.jsx)("span",{className:"dotContinent",children:"\u2022"}),Object(i.jsxs)("span",{className:"continentCritical",children:[e.critical.toLocaleString()," critical"]})]})]},t)}));return Object(i.jsxs)("div",{className:"coneinentContainerAll",children:[Object(i.jsxs)("div",{className:"flexRegion",children:[Object(i.jsx)("div",{className:"dotRegions"}),Object(i.jsx)("h2",{className:"regions",children:"REGIONS"})]}),Object(i.jsx)("div",{className:"continentContainer",children:e})]})};A(209);var p=function(){var e=Object(c.useContext)(h),t=e.mostAffected,A=e.covid,a=t.slice(0,5).map((function(e,t){return Object(i.jsx)(g.b,{to:"/country/".concat(e.country),children:Object(i.jsxs)("div",{className:"mostAffectedItem",children:[Object(i.jsxs)("div",{className:"mostAffectedTitle",children:[Object(i.jsx)("img",{className:"mostAffectedImg",alt:e.country,src:e.countryInfo.flag}),Object(i.jsx)("h2",{className:"mostAffectedName",children:e.country})]}),Object(i.jsx)("h3",{className:"mostAffectedCases",children:"Cases"}),Object(i.jsxs)("p",{className:"mostAffectedCasesNumber",children:[Object(i.jsx)("span",{children:e.cases.toLocaleString()}),Object(i.jsxs)("span",{className:0!==e.todayCases?"mostAffectedToday":"mostAffectedTodayNone",children:["+",e.todayCases.toLocaleString()]})]}),Object(i.jsxs)("p",{className:"mostAffected100",children:[Math.round(e.cases/A.cases*100),"% of world total cases"]})]})},t)}));return Object(i.jsxs)("div",{className:"mostAffectedContainer",children:[Object(i.jsxs)("div",{className:"mostAffectedTopContainer",children:[Object(i.jsx)("div",{className:"redDot"}),Object(i.jsx)("h2",{className:"mostAffectedTop",children:"MOST AFFECTED COUNTRIES"})]}),Object(i.jsx)("div",{className:"mostAffectedCardsContainer",children:a})]})},f=A(11),x=A(39);A(213);var C=function(e){var t=e.filter,A=e.setFilter,a=Object(c.useState)(!1),s=Object(u.a)(a,2),n=s[0],r=s[1];return Object(i.jsxs)("div",{className:"inputContainer",children:[Object(i.jsx)("input",{className:"input",onFocus:function(){return r(!0)},onBlur:function(){return r(!1)},value:t,onChange:function(e){return A(e.target.value)},placeholder:"Search"}),Object(i.jsx)("div",{className:n?"inputImgFocused":"inputImg"})]})};A(214);var N=function(e){var t=e.mostAffected,A=e.title,a=Object(c.useMemo)((function(){return t.map((function(e){return{col1:[e.country,e.countryInfo.flag],col2:e.cases.toLocaleString(),col3:e.casesPerOneMillion.toLocaleString(),col4:e.critical.toLocaleString(),col5:e.recovered.toLocaleString(),col6:e.deaths.toLocaleString(),col7:e.deathsPerOneMillion.toLocaleString(),col8:e.tests.toLocaleString(),col9:e.testsPerOneMillion.toLocaleString()}}))}),[t]),s=Object(c.useMemo)((function(){return[{Header:"Country",accessor:"col1",Cell:function(e){var t=e.cell.value;return Object(i.jsxs)(g.b,{to:"/country/".concat(t[0]),className:"tableWithFlag",children:[Object(i.jsx)("img",{className:"tableFlag",src:t[1]}),Object(i.jsx)("p",{children:t[0]})]})}},{Header:"Cases",accessor:"col2"},{Header:"Cases per million",accessor:"col3"},{Header:"Critical",accessor:"col4"},{Header:"Recovered",accessor:"col5"},{Header:"Deaths",accessor:"col6"},{Header:"Deaths per million",accessor:"col7"},{Header:"Tests",accessor:"col8"},{Header:"Tests per million",accessor:"col9"}]}),[]),n=a.length,r=Object(x.useTable)({columns:s,data:a,initialState:{pageIndex:0}},x.useGlobalFilter,x.usePagination),o=r.getTableProps,l=r.getTableBodyProps,d=r.headerGroups,j=r.prepareRow,u=r.page,h=r.canPreviousPage,b=r.canNextPage,O=r.pageOptions,m=(r.pageCount,r.gotoPage,r.nextPage),v=r.previousPage,p=r.setPageSize,N=r.state,y=N.pageIndex,S=N.pageSize,L=N.globalFliter,B=r.setGlobalFilter;return Object(i.jsxs)("div",{className:"tableAllContainer",children:[Object(i.jsxs)("div",{className:"searchTableContainer",children:[Object(i.jsx)("h2",{className:"tableAllCountries",children:A}),Object(i.jsx)(C,{filter:L,setFilter:B})]}),Object(i.jsxs)("div",{className:"tableContainer",children:[Object(i.jsx)("div",{className:"tableWrap",children:Object(i.jsxs)("table",Object(f.a)(Object(f.a)({},o()),{},{children:[Object(i.jsx)("thead",{children:d.map((function(e){return Object(i.jsx)("tr",Object(f.a)(Object(f.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(i.jsx)("th",Object(f.a)(Object(f.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(i.jsx)("tbody",Object(f.a)(Object(f.a)({},l()),{},{children:u.map((function(e){return j(e),Object(i.jsx)("tr",Object(f.a)(Object(f.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(i.jsx)("td",Object(f.a)(Object(f.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))}),Object(i.jsxs)("div",{className:"paginition",children:[Object(i.jsxs)("div",{className:"buttonsContainer",children:[Object(i.jsx)("button",{className:"buttonPrev",onClick:function(){return v()},disabled:!h,children:"<"}),Object(i.jsx)("button",{className:"buttonNext",onClick:function(){return m()},disabled:!b,children:">"}),Object(i.jsx)("select",{value:S,onChange:function(e){p(Number(e.target.value))},children:[5,10,15,n].map((function(e){return Object(i.jsxs)("option",{value:e,children:["Show ",e===n?"All":e]},e)}))})]}),Object(i.jsxs)("span",{className:"page",children:["Page"," ",Object(i.jsxs)("strong",{children:[y+1," of ",O.length]})]})]})]})]})},y=(A(215),A(216),A.p+"static/media/globe.d4364e11.png");var S=function(){return Object(i.jsxs)("nav",{className:"nav",children:[Object(i.jsx)(g.b,{to:"/",children:Object(i.jsx)("img",{className:"earthImg",src:y,alt:"global data"})}),Object(i.jsx)(g.b,{to:"/search",children:Object(i.jsx)("img",{className:"loop",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFHklEQVR4nN2bTYhWVRjH/+cyiMggg8gQ0yQhk9kEImES1kJbhKiJSIGLiohoEdEiWoRE0CLCWrhoERXRQkqGiEFFVDJeoS8qy6RU0siFH9CozTjW1DSMvxbnHXkbp/uc895z7x37Ld975zn//3M/zrnnecapBIC5kpZLWibpNkk9krokdUqaL+kvSb9JOivplKTvJR12zo2UoacSgEXAc0ADGCeeSeArYCvQV7efIIAM2AB83DSQkgawCcjq9jkjTeNHE5ueiaPAurr9XgO4FdhXgfHp7AEW1W3+MeBKDeanGAa21GF8DvBOjcansx3oqMp8J/4lN9vYhZ9uC+EM8/Ml7ZO0qo3YY5K+lvSd/Fw/JGlU0oj8mqBH0h2SVkq6R9K8NsY4KGm9c+7vNv42H/xt/0nkVRkHduJniOCrA8wDNuNfdLHT6UeUMVUC70WImADeAHoTjLsUGIhMwrYUnltFPBkx+JdAf1IBXsP9wOkIHRtTDdwH/BE46OuU+DYGuvCPRQgXgO4Ug4Y895PAEwk8hujJgDcDk/B+0cEeCjT/eBp7UdreCkxCOzPWtUz/FDDAS4m9herrAA4E6Gu0O8CWgOAHqPHrDFgInAvQGX8XAJ8bQS+TYJorCv4T2WIgNmh/QNAXSvIUDfbSfBxYEBPwZSPgr0A7S9VSAFYFXLCgWWrqed5gnPe2c26smOx0OOe+kP/OyGN9UDBgAfb6e9bt0QFPG5ovEfLCBtYagX6owE80QG/AY7DEipPJb13ncTCN5LQ4585KOmmcZnlTJr9vn8c3oaJq4LBx3Hx0M0nW3G5luU5+No7fbAXIJFnz5flgOdVzzjjeZQXIJM0xzhkNllM9vxvHzbXL7Ky6pOOqdUImX6jMozONllKwtFl3iDL5Km0ePcFyqsd6yV20AmTyJeo8Zt0qsAVL22krQCa/Z5/H3cFyqucu4/hxK0Am35yQx+pQNVUC3CRpac4pV2V789Uf42NokrqrsjMAPGV8BxwJiZM550aVv6TMJD2SRHVaHjWO7w+OhG9LyeMMYC2YKgNYHvAluDImYF9AwGdK9BQFMGhoPdFO0IYR9AKwsAQ/sTpXB1ysZ9sJHLLb+mEJnmI0dgKnDI2XgPjVK74wEtL0VNujgC+9W2wtMsC6gAEmSFWJjdP2aoA2gE8pUiQlrBo7DmxK6M/StC3Q/BTH2k4CvuNzOGCQSeD5xF6naynSnFUoCSF1win2UkLJDFgGHGnTfJIkbI8Y6ArwIr6pqqjxXnw/wERB88WSgJ8VrAXHdC7je4VWRI41B1+f2El7jdYW/5kEq01urqRdkh6IMdTkvKTPJH0rv3s7JL9D0yHfMt8j6XZJKyTdp/J3no5LWuOcG2r9MTcBkr86knZK2lySsCq5LgnmpmizCfFhSa+VKKwq+iU1Wh8H8w5oBb8AeldS7d8EBTkp6V7n3MWobXHn3G5Jd0r6oBRZ1bFE0g4p8g5oBd+H84rK3zLbL2mxvOjUhPUQ5IHv1hhIPH39CeygOZ0CPc2pLDWDbd8BMyRigaSNkh6UvyvCe3Q8Q5IOSdojaXdzq641frekhvyLLBUjyRLQCr4zo0++Pr9Y0i3yhcqpDvIx+YLMGfk1wo/OuV8C4iZPQikJKJPUSbjhEiAlTcLIDVkdbq7k1iig8mNwqLiaGgG6C84Oa+v2UJgCSdhbt/ZkNJNwIsL8MWbBFn9S8J3kIf/Ruvd/Z74V/M72IP/e1xxu/nbdM/8P7LOy6Y/Ht7MAAAAASUVORK5CYII=",alt:"search"})}),Object(i.jsx)(g.b,{to:"/compare",children:Object(i.jsx)("img",{className:"compare",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFcklEQVR4nOWaW4hVVRjH/9/hMMkwTBERMsRwkCFUpKLHkh5kkHmoUBAhiUjwIYKiopcIgm5EhEQXkTAZpKJehC6USYRJmEkEZppMYqJmBhVi2uhcPL8e1j7jnnXW3mefyz57xvnDhrP3+tb6vv//rNte+5MKAjACHAD2A6uLiqMQAEuBKa5iAhgqIpZSEU4l3SOpHLvvkTRSRCBFCdAfeHZj16PQ7H8hCCBNpGYEjPu6PlB+HbAodj/dRNvVpAIzSyyTJIvfRGTXSNooaamkPrnAa8HXCMfvfRFKKWWtoqqrJH1C8bJpz2Y6ui5K+lXSdkkfx0WZEQC4RdKHklZ2KOi5iu8kPWBmp6RIAGBA0j5JleLi6ipOSbrbzH6vddEdWjjkJWlQ0nuSZMCIpF3FxlMY7ivJTXgLFRtLct1hoaJSltTrPaxKekzS5dh91SvPG63uLxphm9f2IgFHmI2pBpufeQvv/QNgLLhZabR7mosASsBioJkeUQoJ0MwWdE4AuEnSXklnJR0HViWY1v+xwDGvW1zKMdaOAxgIDOPToZ4AXPLsToTGeld7ANADPAHsADY1M/8Ag5L2SFruFQ3IvWJnasTvARcyR98BAK96/kezjGNgEDhOGLsT6tT1gEIFAFZQPzMD7AQS/0GgkkL+RyB4tpAkgN/Q+fwo1wW0J4EEwGfMPh+o1akAJxLq/AzcnOIvKIDf2Ll8ac8Esy6FfA274iIAS1LIHwEWN/CZnwDAw8AnwBbc63WabW8KkaAIwBBwMsHmaCOfkd8LHRcAtwF5xWtjPymzOfBcgMSV6Arh6xTyY7jDnCyxdlaAiPzrCYEFz/pxs/d/AfutwBrqu2kaMpPvuAAR+TdSgvs8od4HAdtzuN2cgNWEBWqLfEcFyEAe3PJW8erdRbibP+XZNRKhafIdEyAj+Rpe9OodSCBTt+YDw4GAwc32DSe8PAVIGvMhzOzJcatECPem+FoJ/BWz3Uc0VFoU4FxbAlC/ba3hCvA0cD5Qdj/QD5wNlH2VIehB3KrxKCm7w9wFAB5PIf9IZLM1UL4b2Bx4PgWsaIdQ1wTAbURC43GGfGR3Z4JNaL+/pZvko/haFqCX+vV5CtgUsA1NdD7+oY2x3CpCAmR69zazcUkvxx5dlvu89G7AfFuGJp83s7+z+M4dWXpAzHYYN5snJjMAfQGl4zhKm5NZqwj1gFzeBoG3UgQoJBEiiis4BPI4AntH4e8Hn5rZlzn4axm5nP+b2WFJ33iPxyU9mYe/dpDnB5BnJf0b/a5KesbMfsvRX0to5iNCUzCz74FlklZJOmRmh/Ly1QTqhntuAkiSmf0h6f08fbSJaknd+dg5V7HgBVBey+B8wXRZ9QL0keE1dZ7CT9CcLsvl0MVRljTcnXgKx8WSpINFR1EgDhqwXNJPynlJnIOoSrq9ZGa/SHqz6GgKwNtmdriWKdojaaekxAPKawxfSFprZpMlSTKzSUlrJb0g99JyrWJc0kuKyEtetrgk4b6wrpe0TC5bvEdXM7/jVw3xucMvS7ofVH1+4qnoCqXlpd1PB8ri16TcSjcm6SMz+9Pn3FUAZWB74KBkB81leM0vRMQfxH0JSsIY8NA1JURG4j6O4c4eCzk77AhaJD7/hegQ8fknRER8Q4eJh4SYW3ME7rP3OlyGViNM4Wb70CowGj2fyNDO0chnsUndwG3AD00QvzWqtz5gsyEqW9KEEN/W2iyCfJnkxCWf+JBXt5fZ+b3HgH7PJqsQpwnkE+YOXGp6GvFRn7hXvx+XG7wJuCHFbiiDEJVcSKYB1wPOeIFMNCLehr8KLv/A/0p9hqJWB1w+wD7czL8Zl72dt88B4DXcsNkL3NFOe/8DCQgCR32OsnoAAAAASUVORK5CYII="})})]})};var L=function(){var e=Object(c.useContext)(h),t=e.covid,A=e.covidYesterday,a=e.history,s=e.mostAffected,n=new Date,r=new Date(t.updated).toString(),l=Math.round((n.getTime()-t.updated)/6e4);return Object(i.jsxs)("div",{className:"homeContainer",children:[Object(i.jsx)(S,{}),Object(i.jsxs)("div",{className:"homeTitleContainer",children:[Object(i.jsx)("h1",{children:"GLOBAL"}),Object(i.jsxs)("p",{children:["Affected countries: ",t.affectedCountries]})]}),Object(i.jsx)(m,{totalCases:t.cases,todayCases:t.todayCases,perOneMillion:Math.round(t.casesPerOneMillion),tests:t.tests,activeTotal:t.active,critical:t.critical,activeYesterday:A.active,recovered:t.recovered,todayRecovered:t.todayRecovered,recoveredPercentage:Math.round(t.recovered/t.cases*100),deaths:t.deaths,todayDeaths:t.todayDeaths,deathsPerOneMillion:t.deathsPerOneMillion}),Object(i.jsx)(o,{cases:Object.values(a.cases),deaths:Object.values(a.deaths),label:Object.keys(a.cases)}),Object(i.jsx)(v,{}),Object(i.jsx)(p,{}),Object(i.jsx)(N,{mostAffected:s,title:"ALL COUNTRIES"}),Object(i.jsxs)("div",{className:"updated",children:[Object(i.jsxs)("p",{className:"updatedTime",children:["Last updated ",function(e){var t=Math.floor(e/60),A=e%60;return e<=60?"".concat(A," minutes ago"):e<=120?"".concat(t," hour and ").concat(A," minutes ago"):"".concat(t," hours and ").concat(A," minutes ago")}(l)]}),Object(i.jsx)("p",{className:"updatedDate",children:r})]})]})};A(217);var B=function(){var e=Object(n.g)().continentName,t=Object(c.useState)([]),A=Object(u.a)(t,2),a=A[0],s=A[1],r=Object(c.useState)([]),l=Object(u.a)(r,2),d=l[0],j=l[1],b=Object(c.useState)([]),O=Object(u.a)(b,2),g=O[0],v=O[1],p="",f="",x="",C=Object(c.useContext)(h).mostAffected;return Object(c.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/continents/".concat(e,"?strict=true")).then((function(e){return e.json()})).then((function(e){return s(e)})),fetch("https://disease.sh/v3/covid-19/continents/".concat(e,"?yesterday=true&strict=true")).then((function(e){return e.json()})).then((function(e){return j(e)}))}),[e]),Object(c.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/historical/".concat(a||a.countries.join(","),"?lastdays=30")).then((function(e){return e.json()})).then((function(e){return v(e)}))}),[]),g.length>0&&(p=g.filter((function(e){return null!==e})).map((function(e){return Object.values(e.timeline.cases)})).reduce((function(e,t){return t.map((function(t,A){return(e[A]||0)+t}))}),[]),f=g.filter((function(e){return null!==e})).map((function(e){return Object.values(e.timeline.deaths)})).reduce((function(e,t){return t.map((function(t,A){return(e[A]||0)+t}))}),[]),x=Object.keys(g.filter((function(e){return null!==e}))[0].timeline.cases)),0===x.length?Object(i.jsx)("div",{className:"loading",children:"Loading..."}):Object(i.jsxs)("div",{className:"regionsContainer",children:[Object(i.jsx)(S,{}),Object(i.jsxs)("div",{className:"regionsTitleContainer",children:[Object(i.jsx)("p",{children:"REGION"}),Object(i.jsx)("h1",{children:e})]}),Object(i.jsx)(m,{totalCases:a.cases,todayCases:a.todayCases,perOneMillion:Math.round(a.casesPerOneMillion),tests:a.tests,activeTotal:a.active,critical:a.critical,activeYesterday:d.active,recovered:a.recovered,todayRecovered:a.todayRecovered,recoveredPercentage:Math.round(a.recovered/a.cases*100),deaths:a.deaths,todayDeaths:a.todayDeaths,deathsPerOneMillion:a.deathsPerOneMillion}),Object(i.jsx)(o,{cases:p,deaths:f,label:x}),Object(i.jsx)(N,{mostAffected:C.filter((function(t){return t.continent===e})),title:"COUNTRIES"})]})};A(218);var P=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),A=t[0],a=t[1],s=Object(c.useState)([]),r=Object(u.a)(s,2),l=r[0],d=r[1],j=Object(c.useContext)(h).mostAffected,b=Object(c.useState)(!0),O=Object(u.a)(b,2),g=O[0],v=O[1],p=Object(n.g)().countryName,f=j.filter((function(e){return e.country===p}));console.log(f);var x=new Date,C=new Date(f[0].updated).toString(),N=Math.round((x.getTime()-f[0].updated)/6e4);return Object(c.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/countries/".concat(p,"?yesterday=true&strict=true")).then((function(e){return e.json()})).then((function(e){return a(e)})),fetch("https://disease.sh/v3/covid-19/historical/".concat(p,"?lastdays=30")).then((function(e){return e.json()})).then((function(e){return d(e),v(!1)}))}),[]),g?Object(i.jsx)("p",{className:"loading",children:"Loading..."}):Object(i.jsxs)("div",{className:"countryDetailsContainer",children:[Object(i.jsx)(S,{}),Object(i.jsxs)("div",{className:"countryDetailsTitle",children:[Object(i.jsxs)("div",{className:"countryDetailsTitleTop",children:[Object(i.jsx)("img",{src:f[0].countryInfo.flag}),Object(i.jsx)("h1",{children:f[0].country})]}),Object(i.jsxs)("h2",{children:["POPULATION: ",f[0].population.toLocaleString()]})]}),Object(i.jsx)(m,{totalCases:f[0].cases,todayCases:f[0].todayCases,perOneMillion:Math.round(f[0].casesPerOneMillion),tests:f[0].tests,activeTotal:f[0].active,critical:f[0].critical,activeYesterday:A.active,recovered:f[0].recovered,todayRecovered:f[0].todayRecovered,recoveredPercentage:Math.round(f[0].recovered/f[0].cases*100),deaths:f[0].deaths,todayDeaths:f[0].todayDeaths,deathsPerOneMillion:f[0].deathsPerOneMillion}),l.message?Object(i.jsx)("div",{className:"noHistoricalData",children:Object(i.jsx)("p",{children:"No historical data"})}):Object(i.jsx)(o,{cases:Object.values(l.timeline.cases),deaths:Object.values(l.timeline.deaths),label:Object.keys(l.timeline.cases)}),Object(i.jsxs)("div",{className:"updatedCountry",children:[Object(i.jsxs)("p",{className:"countryUpdatedTime",children:["Last updated ",function(e){var t=Math.floor(e/60),A=e%60;return e<=60?"".concat(A," minutes ago"):e<=120?"".concat(t," hour and ").concat(A," minutes ago"):"".concat(t," hours and ").concat(A," minutes ago")}(N)]}),Object(i.jsx)("p",{className:"countryUpdatedDate",children:C})]})]})};A(219);var R=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),A=t[0],a=t[1],s=Object(c.useContext)(h).mostAffected.filter((function(e){return e.country.toLowerCase().includes(A.toLowerCase())})).map((function(e,t){return Object(i.jsxs)(g.b,{to:"/country/".concat(e.country),className:"searchItem",children:[Object(i.jsxs)("div",{className:"searchItemFlagContainer",children:[Object(i.jsx)("img",{alt:"".concat(e.country," flag"),src:e.countryInfo.flag}),Object(i.jsx)("p",{children:e.country})]}),Object(i.jsx)("p",{className:"searchItemCases",children:"Cases"}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"searchItemCasesNumber",children:e.cases.toLocaleString()}),Object(i.jsxs)("span",{className:0!==e.todayCases?"searchItemCasesNumberToday":"searchItemCasesNumberTodayNone",children:["+",e.todayCases.toLocaleString()]})]})]},t)}));return Object(i.jsxs)("div",{className:"searchContainer",children:[Object(i.jsx)(S,{}),Object(i.jsxs)("div",{className:"search",children:[Object(i.jsx)("h1",{children:"SEARCH"}),Object(i.jsx)("input",{type:"text",placeholder:"Search country",className:"searchInput",onChange:function(e){return a(e.target.value)},value:A})]}),""!==A.trim()?Object(i.jsx)("div",{className:"searchResultContainer",children:s}):Object(i.jsxs)("div",{className:"searchEmpty",children:[Object(i.jsx)("img",{alt:"globe",src:y}),Object(i.jsx)("p",{children:"Search for a country"})]})]})},k=A(9),J=(A(220),A(83));var T=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),A=t[0],a=t[1],s=Object(c.useState)([]),n=Object(u.a)(s,2),o=n[0],l=n[1],d=Object(c.useState)(!0),j=Object(u.a)(d,2),b=(j[0],j[1]),O=Object(c.useContext)(h).mostAffected,m={},g={},v=[];Object(c.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/historical/".concat(A.map((function(e){return e.value})).join(","),"/?lastdays=30")).then((function(e){return e.json()})).then((function(e){return l(e),b(!1)}))}),[A]);for(var p=O.map((function(e){return{value:e.country,label:e.country}})),f=function(e){v.push.apply(v,Object(k.a)(O.filter((function(t){return t.country===A[e].value}))))},x=0;x<A.length;x++)f(x);return void 0===o.length?(m={labels:Object.keys(o.timeline.cases),datasets:[{label:o.country,data:Object.values(o.timeline.cases),backgroundColor:"green",borderColor:"green",fill:!1,pointRadius:0,pointHoverRadius:5}]},g={labels:Object.keys(o.timeline.deaths),datasets:[{label:o.country,data:Object.values(o.timeline.deaths),backgroundColor:"green",borderColor:"green",fill:!1,pointRadius:0,pointHoverRadius:5}]}):o.length>1&&(m={labels:Object.keys(o[0].timeline.cases),datasets:o.map((function(e,t){return{label:e.country,data:Object.values(e.timeline.cases),backgroundColor:0===t?"green":1===t?"red":2===t?"blue":3===t?"yellow":4===t?"grey":6===t?"royalblue":7===t?"white":"black",borderColor:0===t?"green":1===t?"red":2===t?"blue":3===t?"yellow":4===t?"grey":6===t?"royalblue":7===t?"white":"black",fill:!1,pointRadius:0,pointHoverRadius:5}}))},g={labels:Object.keys(o[0].timeline.deaths),datasets:o.map((function(e,t){return{label:e.country,data:Object.values(e.timeline.deaths),backgroundColor:0===t?"green":1===t?"red":2===t?"blue":3===t?"yellow":4===t?"grey":6===t?"royalblue":7===t?"white":"black",borderColor:0===t?"green":1===t?"red":2===t?"blue":3===t?"yellow":4===t?"grey":6===t?"royalblue":7===t?"white":"black",fill:!1,pointRadius:0,pointHoverRadius:5}}))}),Object(i.jsxs)("div",{className:"compareContainer",children:[Object(i.jsx)(S,{}),Object(i.jsx)("h1",{children:"COMPARE"}),Object(i.jsx)("div",{className:"compareSelect",children:Object(i.jsx)(J.a,{className:"select",backspaceRemovesValue:!0,onChange:function(e){return a(e)},closeMenuOnScroll:!0,isMulti:!0,options:p})}),Object(i.jsxs)("div",{className:0===A.length?"imgContainer":"imgContainerNoDisplay",children:[Object(i.jsx)("img",{className:"globeCompare",src:y}),Object(i.jsx)("p",{children:"Select countries to compare"})]}),Object(i.jsx)("div",{className:A.length>0?"lineChartContainerCases":"lineChartConainerNone",children:Object(i.jsx)(r.a,{options:{responsive:!0,maintainAspectRatio:!1,plugins:{tooltip:{mode:"index",intersect:!1},legend:{labels:{usePointStyle:!0,pointStyle:"circle"},position:"top"},title:{font:{size:15},align:"start",display:!0,text:"Last 30 days cases"}}},data:m})}),Object(i.jsx)("div",{className:A.length>0?"lineChartContainerDeaths":"lineChartConainerNone",children:Object(i.jsx)(r.a,{options:{responsive:!0,maintainAspectRatio:!1,plugins:{tooltip:{mode:"index",intersect:!1},legend:{labels:{usePointStyle:!0,pointStyle:"circle"},position:"top"},title:{font:{size:15},align:"start",display:!0,text:"Last 30 days deaths"}}},data:g})}),A.length>0&&Object(i.jsx)(N,{mostAffected:v,title:"More informations"})]})};var M=function(){var e=Object(c.useContext)(h).isLoading;return Object(i.jsx)("div",{className:"appContainer",children:Object(i.jsxs)(n.c,{children:[e?Object(i.jsx)("p",{className:"loading",children:"Loading..."}):Object(i.jsx)(n.a,{exact:!0,path:"/",children:Object(i.jsx)(L,{})}),Object(i.jsx)(n.a,{path:"/regions/:continentName",children:Object(i.jsx)(B,{})}),Object(i.jsx)(n.a,{path:"/country/:countryName",children:Object(i.jsx)(P,{})}),Object(i.jsx)(n.a,{path:"/search",children:Object(i.jsx)(R,{})}),Object(i.jsx)(n.a,{path:"/compare",children:Object(i.jsx)(T,{})})]})})};function E(){var e=Object(n.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}s.a.render(Object(i.jsx)(b,{children:Object(i.jsxs)(g.a,{children:[Object(i.jsx)(E,{}),Object(i.jsx)(M,{})]})}),document.getElementById("root"))},88:function(e,t,A){}},[[235,1,2]]]);
//# sourceMappingURL=main.7249c9d9.chunk.js.map