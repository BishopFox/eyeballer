###############################################################################
# Parts of this are borrowed from the HTTPie Makefile. Thanks!
###############################################################################

REQUIREMENTS="requirements-dev.txt"
TAG="\n\n\033[0;32m\#\#\# "
END=" \#\#\# \033[0m\n"

PIP=$(shell which pip3)
CONDA=$(shell which conda)
CONDA_HOME="$(HOME)/anaconda3"
VENV="eyeballer_venv"

SHELL := /bin/bash
.ONE_SHELL:

all: test

# Target-specific assignments
conda: PIP := "$(CONDA_HOME)/envs/$(VENV)/bin/pip"
conda init: uninstall-eyeballer

ifeq ($(strip $(MAKECMDGOALS)),conda)
	@echo -e $(TAG)Conda detected at: $(CONDA)$(END)
	conda create -yn $(VENV) | true

	source $(CONDA_HOME)/etc/profile.d/conda.sh; \
	conda activate $(VENV); \
	conda install -y pip
endif
	@echo -e $(TAG)Installing dev requirements$(END)
	$(PIP) install --upgrade -r $(REQUIREMENTS)

	@echo -e $(TAG)Installing Eyeballer$(END)
	$(PIP) install --upgrade --editable .

ifeq ($(strip $(MAKECMDGOALS)),conda)
	@echo -e $(TAG)Activate virtualenv to run eyeballer: $(END)
	@echo conda activate $(VENV)
endif

	@echo

clean:
	@echo -e $(TAG)Cleaning up$(END)
	rm -rf *.egg dist build .cache .pytest_cache eyeballer.egg-info
	find . -name '__pycache__' -delete -print -o -name '*.pyc' -delete -print
ifneq ($(strip $(CONDA)),)
	conda env remove -y --name eyeballer_venv | true
endif
	@echo


###############################################################################
# Testing
###############################################################################


test:
	@echo -e $(TAG)Running tests on the current Python interpreter with coverage $(END)
	python -m unittest tests
	@echo


# test-all is meant to test everything — even this Makefile
test-all: uninstall-all clean init test pycodestyle
	@echo


pycodestyle:
	which pycodestyle || $(PIP) install pycodestyle
	pycodestyle
	@echo


###############################################################################
# Uninstalling
###############################################################################

uninstall-eyeballer:
	@echo using pip3 located at: $(PIP)
	@echo -e $(TAG)Uninstalling eyeballer$(END)
	- $(PIP) uninstall --yes eyeballer &2>/dev/null

	@echo "Verifying…"
	cd .. && ! python -m eyeballer --version &2>/dev/null

	@echo "Done"
	@echo


uninstall-all: uninstall-eyeballer

	@echo -e $(TAG)Uninstalling development requirements$(END)
	- $(PIP) uninstall --yes -r $(REQUIREMENTS)
