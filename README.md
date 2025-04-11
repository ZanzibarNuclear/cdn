# World of Nuclear CDN

This is how we store and serve static files for the World of Nuclear: images, css, fonts, etc. Having a CDN allows for easy sharing across apps, preventing duplication and keeping large files out of the codebase.

Plus, we can help clients with caching hints to optimize delivery. Also, we can keep things organized for our own sanity.

This service should back an edge solution, like Cloudflare. In fact, that's what we will do. Cloudflare has a storage option, but it seems to lack any organizing structures (like directories, hello?), and the URLs to images are cryptic.

Another option would be using S3 with common storage, something like Ceph for durability. Someday...one can dream that WoN will grow big enough to require that level of scalability and resilience.

At least this is reasonably scalable and easy to operate for today's needs.
