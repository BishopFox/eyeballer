from setuptools import find_packages, setup

setup(
    name='eyeballer',
    version='0.0.1',
    packages=find_packages(exclude=["tests"]),
    url='https://github.com/BishopFox/eyeballer',
    license='GNU General Public License v3.0',
    author='Daniel Petro',
    author_email='',
    description='',
    install_requires=[
        'keras',
        'sklearn',
        'numpy',
        'pandas',
        'matplotlib',
        'pillow', 'click'
    ],
    test_requires=[],
)
