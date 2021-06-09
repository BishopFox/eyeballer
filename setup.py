import setuptools

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setuptools.setup(
    name="eyeballer",
    version="1.0.0",
    author="Dan Petro",
    description="Eyeballer is meant for large-scope network penetration tests where you need to find \"interesting\" targets from a huge set of web-based hosts.",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/BishopFox/eyeballer",
    project_urls={
        "Bug Tracker": "https://github.com/BishopFox/eyeballer/issues",
    },
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: GNU General Public License v3 (GPLv3)",
        "Operating System :: OS Independent",
    ],
    install_requires=[
        'Augmentor',
        'click',
        'matplotlib',
        'numpy',
        'pandas',
        'pillow',
        'sklearn',
        'tensorflow',
        'jinja2',
        'progressbar2'
    ],
    packages=setuptools.find_packages(),
    entry_points = {
        'console_scripts': [
            'eyeballer = eyeballer.cli:cli'
        ],
    },
    python_requires=">=3.6",
)