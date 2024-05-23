help:
	@grep "^[a-zA-Z\-]*:" Makefile | grep -v "grep" | sed -e 's/^/make /' | sed -e 's/://'

install:
	@echo -------------------- install packages ----------------------------------------------------
	bundle install

update:
	@echo -------------------- update packages -----------------------------------------------------
	bundle update

run:
	@echo -------------------- run jekyll server ---------------------------------------------------
	bundle exec jekyll serve --livereload

rund:
	@echo -------------------- run jekyll server with drafts ---------------------------------------
	bundle exec jekyll serve --livereload --drafts

clean:
	@echo -------------------- clean package -------------------------------------------------------
	rm -rf docs/_site
	rm -rf docs/.jekyll-cache
	rm -rf vendor
