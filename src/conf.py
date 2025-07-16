import datetime

# Configuration file for the Sphinx documentation builder.

# -- Project information

project = 'NeuroPawn'
copyright = f"{datetime.datetime.now().year}, NeuroPawn Biotechnologies Inc."
author = 'NeuroPawn Biotechnologies Inc.'

release = '0.1'
version = '0.1.0'

# -- General configuration

extensions = [
    'sphinx.ext.duration', # Measures build times for each document.
    'sphinx.ext.doctest', # Allows running Python code in your docs as tests.
    'sphinx.ext.autodoc', # Automatically includes docstrings from your Python code.
    'sphinx.ext.autosummary', # Generates summary tables for modules/classes/functions.
    'sphinx.ext.intersphinx', # Links to other project's documentation (e.g., Python’s stdlib docs).
]

intersphinx_mapping = {
    'python': ('https://docs.python.org/3/', None),
    'sphinx': ('https://www.sphinx-doc.org/en/master/', None),
}
intersphinx_disabled_domains = ['std']

templates_path = ['_templates'] # not being used

# -- Options for HTML output
html_theme = 'sphinx_rtd_theme'

# Add this to tell Sphinx where to find static files
html_static_path = ['_static']

# Set the path to the logo
html_logo = '_static/horizontal_logo.png'

html_css_files = [
    'custom.css',
]

html_js_files = [
    'custom.js',
]

html_theme_options = {
    'logo_only': True,
    'display_version': False,
    'repository_url': 'https://github.com/NeuroPawn',
    'use_repository_button': True,
}

# -- Options for EPUB output
epub_show_urls = 'footnote'

master_doc = 'index'

extensions = [
    # ...existing extensions...
    'myst_parser',
]

# MyST-Parser configuration
myst_enable_extensions = [
    "colon_fence",      # ::: instead of ``` for directives
    "deflist",          # Definition lists
    "tasklist",         # - [ ] and - [x] checkboxes
    "attrs_inline",     # {.class #id} syntax
    "html_image",       # <img> tags with more control
    "replacements",     # Smart quotes and dashes
    "smartquotes",      # Automatic quote formatting
]

# Enable heading anchors for direct linking
myst_heading_anchors = 3  # Generate anchors for h1-h3

# External links open in new tab
myst_links_external_new_tab = True

# URL schemes to recognize as external
myst_url_schemes = ("http", "https", "mailto", "ftp")