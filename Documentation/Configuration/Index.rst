.. include:: ../Includes.txt

.. _configuration:

=============
Configuration
=============


TYPO3 >13:
Add the dependency to the site set: datamints/top


TYPO3 <13:
Please include the Static Typoscript Template, either by going to "Template -> Includes" and selecting "datamints Top" OR by including them in your site package:

setup

.. code-block:: typoscript

   @import 'EXT:datamints_top/Configuration/TypoScript/setup.typoscript'

constants

.. code-block:: typoscript

   @import 'EXT:datamints_top/Configuration/TypoScript/constants.typoscript'


.. _configuration-typoscript:


Overwrite Template
===================

.. code-block:: typoscript

   plugin.tx_datamintstop{
     view{
       templateRootPath = EXT:your_extension/Resources/Private/Templates
     }
}

TypoScript Reference
====================

======================================  =============  ======================================================================================  =====================================
Property:                               Data type:     Description:                                                                            Default:
======================================  =============  ======================================================================================  =====================================
view.templateRootPath                   string         Path to template files
--------------------------------------  -------------  --------------------------------------------------------------------------------------  -------------------------------------
settings.buttonBackgroundColor          string         HEX-Value the Button Background-color                                                   #ffffff
--------------------------------------  -------------  --------------------------------------------------------------------------------------  -------------------------------------
settings.buttonIconColor                string         HEX-Value the Button Icon-color                                                         #000000
======================================  =============  ======================================================================================  =====================================
