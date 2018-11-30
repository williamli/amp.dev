---
$title: Combine AMP with Progressive Web Apps
$order: 5
formats:
- websites
- stories
---
[TOC]

[video]
[](https://www.youtube.com/watch?v=Yllbfu3JE2Y)
[/video]

Progressive Web Apps and AMP pages work great together. In fact, in many cases, they complement each other in one way or another. Learn how to:

1. [Enable PWA features](#) for your AMP pages
2. Create a [compelling, super-fast user journey](#) from AMP to PWA
3. [Simplify your PWA](#) by using the power of AMP

[tip type="read-on"]
Learn more about [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/) at Web Fundamentals.
[/tip]

## AMP pages with PWA features

AMP Pages can use many PWA features on their own, as long as they're served from your origin (your site's domain) as opposed to an AMP Cache. This means that PWA features won't kick in when consuming an AMP Page within a platform like Google or Bing, but they will on the onward journey, or if users navigate to your AMP pages directly.

Read on: Learn how to [enable PWA features](#) for your AMP Pages.

## AMP as entry point into your PWA

AMP's unique selling point is the **almost-instant delivery**, a characteristic that makes AMP the perfect fit for the first user interaction with your site. *Progressive web apps* enable much **more interactivity and engagement-enabling features**, but their first load is hindered by the fact that the site's Service Worker, and therefore its assets and app shell, are only accelerating delivery on subsequent loads.

A good strategy is to make the entry point into your site an AMP page, then warm up the PWA behind the scenes and switch to it for the onward journey.

Read on: Learn how to [connect AMP to a PWA](#) through `amp-install-serviceworker`.

## AMP as data source for your PWA

One of the core features of AMP Pages is that they're easy and safe to embed, which is why an ever-growing number of platforms are happy to distribute and serve them.

If you're building a Progressive Web App, you can receive the same benefits and dramatically reduce your backend and client complexity by **re-using your AMP Pages as data-source for your PWA**.

Read on: Learn how to [consume AMP pages within a PWA](#).