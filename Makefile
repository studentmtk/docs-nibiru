###############################################################################
###                           Documentation                                 ###
###############################################################################

DOCS_OUTPUT?=/tmp/nibiru-docs
DOCS_DOMAIN=docs.nibiru.fi

# This builds a docs site for each branch/tag in `./docs/versions` and copies
# each site to a version prefixed path. The last entry inside the `versions`
# file will be the default root index.html. Only redirects that are built into
# the "redirects" folder of each of the branches will be copied out to the root
# of the build at the end.
build-docs:
	@cd docs && \
	while read -r branch path_prefix; do \
		(git checkout $${branch} && yarn install --frozen-lockfile && VUEPRESS_BASE="/$${path_prefix}/" yarn build) ; \
		mkdir -p $(DOCS_OUTPUT)/$${path_prefix} ; \
		cp -r .vuepress/dist/* $(DOCS_OUTPUT)/$${path_prefix}/ ; \
		cp $(DOCS_OUTPUT)/$${path_prefix}/index.html $(DOCS_OUTPUT) ; \
		cp $(DOCS_OUTPUT)/$${path_prefix}/404.html $(DOCS_OUTPUT) ; \
	done < versions ;
	@echo $(DOCS_DOMAIN) > $(DOCS_OUTPUT)/CNAME
.PHONY: build-docs